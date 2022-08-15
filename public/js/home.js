const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged")
const session = localStorage.getItem("session"); 

let data = {
    transactions: []
};

document.getElementById("button-logout").addEventListener("click", logout);
document.getElementById("transactions-button").addEventListener("click", function() {
    window.location.href = "transactions.html"
})

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

getcashin();
getcashout();
getTotal();

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

    getcashin();
    getcashout();
    getTotal();
}

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";
}

function getcashin() {
    const transaction = data.transactions;

    const cashin = transaction.filter((item) => item.type === "1");

    if(cashin.length) {
        let cashinhtml = ``;
        let limit = 0;

        if(cashin.length >5) {
            limit = 5; }
            else {
                limit = cashin.length;
            }

            for (let index = 0; index < limit; index++) {
            cashinhtml +=`
            <div class="row mb-4">
                                        <div class="col-12">
                                            <h3 class="fs-2">R$ ${cashin[index].value.toFixed(2)}</h3>
                                            <div class="container p-0">
                                              <div class="row">
                                                <div class="col-12 col-md-8">
                                                  <p>${cashin[index].description}</p>
                                                </div>
                                                <div class="col-12 col-md-3 d-flex justify-content-end">
                                                  ${cashin[index].date}
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
            `
            }

            document.getElementById("cashin-list").innerHTML = cashinhtml;
    }

   


    

}

function getcashout() {
    const transaction = data.transactions;

    const cashin = transaction.filter((item) => item.type === "2");

    if(cashin.length) {
        let cashinhtml = ``;
        let limit = 0;

        if(cashin.length >5) {
            limit = 5; }
            else {
                limit = cashin.length;
            }

            for (let index = 0; index < limit; index++) {
            cashinhtml +=`
            <div class="row mb-4">
                                        <div class="col-12">
                                            <h3 class="fs-2">R$ ${cashin[index].value.toFixed(2)}</h3>
                                            <div class="container p-0">
                                              <div class="row">
                                                <div class="col-12 col-md-8">
                                                  <p>${cashin[index].description}</p>
                                                </div>
                                                <div class="col-12 col-md-3 d-flex justify-content-end">
                                                  ${cashin[index].date}
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
            `
            }

            document.getElementById("cashout-list").innerHTML = cashinhtml;
    }

}

function getTotal() {
    const transactions = data.transactions;
    let total = 0;
    transactions.forEach((item) => {
        if(item.type ==="1") {
            total += item.value;}
            else {
                total -= item.value;
            }
    });

    document.getElementById("total").innerHTML = `R$ ${total.toFixed(2)}`;
}

function savedata(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}