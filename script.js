let tela = document.querySelector("#telaPintura");

let corAzul = document.querySelector("#pincelAzul");
let corVermelho = document.querySelector("#pincelVermelho");
let corAmarelo = document.querySelector("#pincelAmarelo");
let corAzulVerde = document.querySelector("#pincelAzulVerde");
let corLaranjaAmarelo = document.querySelector("#pincelLaranjaAmarelo");
let corVerdeLaranja = document.querySelector("#pincelVerdeLaranja");
let corVermelhoRoxo = document.querySelector("#pincelVermelhoRoxo");
let corVioletaRosa = document.querySelector("#pincelVioletaRosa");
let corMarromAmarelo = document.querySelector("#pincelMarromAmarelo");


let corAzulInvertido = document.querySelector("#pincelAzulInvertido");
let corVermelhoInvertido = document.querySelector("#pincelVermelhoInvertido");
let corAmareloInvertido = document.querySelector("#pincelAmareloInvertido");
let corAzulVerdeInvertido = document.querySelector("#pincelAzulVerdeInvertido");
let corLaranjaAmareloInvertido = document.querySelector("#pincelLaranjaAmareloInvertido");
let corVerdeLaranjaInvertido = document.querySelector("#pincelVerdeLaranjaInvertido");
let corVermelhoRoxoInvertido = document.querySelector("#pincelVermelhoRoxoInvertido");
let corVioletaRosaInvertido = document.querySelector("#pincelVioletaRosaInvertido");
let corMarromAmareloInvertido = document.querySelector("#pincelMarromAmareloInvertido");


let corpo = document.querySelector(".fundo"); 

corAzul.addEventListener("click", azul);
corAmarelo.addEventListener("click", amarelo);
corVermelho.addEventListener("click", vermelho);

corAzulVerde.addEventListener("click", AzulVerde);
corLaranjaAmarelo.addEventListener("click", LaranjaAmarelo);
corVerdeLaranja.addEventListener("click", VerdeLaranja);
corVermelhoRoxo.addEventListener("click", VermelhoRoxo);
corVioletaRosa.addEventListener("click", VioletaRosa);
corMarromAmarelo.addEventListener("click", MarromAmarelo);

corAzulInvertido.addEventListener("click", azulInvertido);
corAmareloInvertido.addEventListener("click", amareloInvertido);
corVermelhoInvertido.addEventListener("click", vermelhoInvertido);
corAzulVerdeInvertido.addEventListener("click", AzulVerdeInvertido);
corLaranjaAmareloInvertido.addEventListener("click", LaranjaAmareloInvertido);
corVerdeLaranjaInvertido.addEventListener("click", VerdeLaranjaInvertido);
corVermelhoRoxoInvertido.addEventListener("click", VermelhoRoxoInvertido);
corVioletaRosaInvertido.addEventListener("click", VioletaRosaInvertido);
corMarromAmareloInvertido.addEventListener("click", MarromAmareloInvertido);



let nomeCor = document.querySelector("h3")



function azul() {
    tela.style.background = "blue";
    nomeCor.innerHTML = "Azul";
}

function vermelho() {
    tela.style.background = "tomato";
    nomeCor.innerHTML = "Vermelho";
}

function amarelo() {
    tela.style.background = "gold";
    nomeCor.innerHTML = "Amarelo";
}


function AzulVerde() {
    tela.style.background = "linear-gradient(45deg, #136dfc, #0ef960";
    nomeCor.innerHTML = "Azul & Verde";
}
function LaranjaAmarelo() {
    tela.style.background = "linear-gradient(45deg, #ffb60b, #f9f50e)"
    nomeCor.innerHTML = "Laranja & Amarelo";
}
function VerdeLaranja() {
    tela.style.background = "linear-gradient(45deg, #32fc13, #f99f0e)";
    nomeCor.innerHTML = "Verde & Laranja";
}
function VermelhoRoxo() {
    tela.style.background = "linear-gradient(45deg, #fc1313, #7c0ef9)";
    nomeCor.innerHTML = "Vermelho & Roxo";
}
function VioletaRosa() {
    tela.style.background = "linear-gradient(45deg, #7f00ff, #f90ee5)";
    nomeCor.innerHTML = "Violeta & Rosa";
}
function MarromAmarelo() {
    tela.style.background = "linear-gradient(45deg, #b56304, #f5f90e)";
    nomeCor.innerHTML = "Marrom & Amarelo";
}



function azulInvertido() {
    corpo.style.background = "blue";
    nomeCor.innerHTML = "Azul";
}
function vermelhoInvertido() {
    corpo.style.background = "tomato";
    nomeCor.innerHTML = "Vermelho";
}
function amareloInvertido() {
    corpo.style.background = "gold";
    nomeCor.innerHTML = "Amarelo";
}
function AzulVerdeInvertido() {
    corpo.style.background = "linear-gradient(45deg, #136dfc, #0ef960";
    nomeCor.innerHTML = "Azul & Verde";
}
function LaranjaAmareloInvertido() {
    corpo.style.background = "linear-gradient(45deg, #ffb60b, #f9f50e)"
    nomeCor.innerHTML = "Laranja & Amarelo";
}
function VerdeLaranjaInvertido() {
    corpo.style.background = "linear-gradient(45deg, #32fc13, #f99f0e)";
    nomeCor.innerHTML = "Verde & Laranja";
}
function VermelhoRoxoInvertido() {
    corpo.style.background = "linear-gradient(45deg, #fc1313, #7c0ef9)";
    nomeCor.innerHTML = "Vermelho & Roxo";
}
function VioletaRosaInvertido() {
    corpo.style.background = "linear-gradient(45deg, #7f00ff, #f90ee5)";
    nomeCor.innerHTML = "Violeta & Rosa";
}
function MarromAmareloInvertido() {
    corpo.style.background = "linear-gradient(45deg, #b56304, #f5f90e)";
    nomeCor.innerHTML = "Marrom & Amarelo";
}

// function azul() {
//     corpo.style.background = "blue";
//     nomeCor.innerHTML = "Azul";
// }

// function vermelho() {
//     corpo.style.background = "tomato";
//     nomeCor.innerHTML = "Vermelho";
// }

// function amarelo() {
//     corpo.style.background = "gold";
//     nomeCor.innerHTML = "Amarelo";
// }