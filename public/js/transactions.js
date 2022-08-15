const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged")
const session = localStorage.getItem("session"); 

let data = {
    transactions: []
};  

document.getElementById("button-logout").addEventListener("click", logout);

//ADICIONAR LANÇAMENTO
document.getElementById("transaction-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value); 
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value

    data.transactions.unshift({
        value: value, type: type, description: description, date: date
    });

savedata(data);
e.target.reset();
myModal.hide();

gettransactions();

alert("Lançamento adicionado com sucesso.");


})

checklogged();

function checklogged() {
    if (session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if(!logged) {
        window.location.href = "home.html";
        return;
    }
    const datauser = localStorage.getItem(logged);
    if(datauser) {
        data = JSON.parse(datauser);
    }

    gettransactions();
}

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";
}

function gettransactions() {
    const transactions = data.transactions;
    let transactionshtml = ``;

    if(transactions.length) {
       transactions.forEach((item) => {
          let = type= "entrada";

          if(item.type === "2") {
            type = "saida";

          }

          transactionshtml += `
        <tr>
          <th scope="row">${item.date}</th>
          <td>${item.value.toFixed(2)}</td>
          <td>${type}</td>
          <td>${item.description}</td>
        </tr>
        
          `
       })
    }

    document.getElementById("transactions-list").innerHTML = transactionshtml;
}

function savedata(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

