let numeroProdutos = 0

let marcador = document.getElementById("marcador");

function contarProdutos() {
    numeroProdutos = numeroProdutos + 1;
    console.log(numeroProdutos)

    marcador.innerText = numeroProdutos;
}

