const nome = "alexandre"
let nome2 = "";
let pessoadefault = {
    nome: "Alexandre",
    idade: "22",
    trabalho: "programador"
}

let nomes = ["alexandre", "Maria Silva", "Pedro Silva",];
let pessoas = [
    {
        nome: "Alexandre",
        idade: "22",
        trabalho: "programador"
    },
    {
        nome: "maria silva",
        idade: "25",
        trabalho: "UX DESIGN"
    }
]; 

function alterarnome() {
    nome2= "Maria Silva";
    console.log("Valor alterado:");
     console.log(nome2);
}

function recebeealteranome(novonome) {
    nome2= novonome
    console.log("Valor alterado Recebendo um nome:");
    console.log(nome2);
}

function imprimirpessoa(pessoa) {
    console.log("nome:");
    console.log(pessoa.nome);
    
    console.log("idade:");
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);
}
function adicionarpessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirpessoas() {
    console.log("------IMPRIMIR PESSOAS-----");
    pessoas.forEach((item) => {
    console.log("nome:");
    console.log(item.nome);

    console.log("idade:");
    console.log(item.idade);
    
    console.log("trabalho:");
    console.log(item.trabalho);
})
    }

    imprimirpessoas();

adicionarpessoa({
    nome: "Pedro silva",
    idade: "28",
    trabalho: "porteiro"
});

imprimirpessoas();




//imprimirpessoa(pessoadefault);
//imprimirpessoa({
//   nome: "Maria Silva",
  //  idade: "25",
    //trabalho: "UX DESIGN",
//})

//recebeealteranome("João Silva Pereira");
//recebeealteranome("Maria silva");

//alterarnome(); 