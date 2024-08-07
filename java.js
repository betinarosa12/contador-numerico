let span = document.getElementsByClassName("numero-inicial");
let numeroInicio = 0;

span.innerHTML = numeroInicio;

function limpar() {
    span = 0;
    document.getElementById("numero-inicial").textContent = "0";
}

function subtracao() {
    span = document.getElementById("numero-inicial");
    span.innerHTML = parseInt(span.innerHTML) -1;
}

function adicao() {
    span = document.getElementById("numero-inicial");
    span.innerHTML = parseInt(span.innerHTML) +1;
}