const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged")
const session = localStorage.getItem("session"); 

checklogged();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checksession = document.getElementById("session-check").checked;

    const account = getaccount(email);
    if(!account) {
        alert("Ops! Verifique o usuario ou a senha.");
        return;
    }

    if(account) {
        if(account.password !== password) {
        alert("Ops! Verifique o usuario ou a senha.");
        return;
    }

    savesession(email, checksession);

    window.location.href = "home.html";
    }
});

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if (email.lenght < 15) {
        alert("Preencha o campo com um e-mail válido.");
    }
    if (password.lenght < 4) {
        alert("Crie uma senha com no minimo 4 digitos");
        return
    }
    saveAccount({
        login: email,
        password: password,
        transactions: []
    });

    myModal.hide();

    alert("Conta criada com sucesso.");
});

function checklogged() {
    if (session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if(logged) {
        savesession(logged, session)

        window.location.href = "home.html";
    }
}

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function savesession(data, savesession) {
    if(savesession) {
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}

function getaccount(key) {
    const account = localStorage.getItem(key);

    if(account) {
        return JSON.parse(account);
    }
    return "";
}

