// 1 - Alterando Texto
let titulo1 = document.getElementById("titulo1")
function mudarTexto1() {
titulo1.innerText = "Aprendendo DOM com JavaScript"
}

// 2 - Mensagem de Boas-Vindas

let resposta2 = document.getElementById("resposta2")
function boasVindas() {
let nome2 = document.getElementById("nome2").value
resposta2.innerText = "Bem-vindo ao sistema, " + nome2
}

// 3 - Alterar Frase
let frase3 = document.getElementById("frase3")
function mudarFrase() {
frase3.innerText = "Manipulando HTML com JavaScript"
}

// 4 - Alerta de Campo Vazio
let resposta4 = document.getElementById("resposta4")
function verificarNome() {
let nome4 = document.getElementById("nome4").value
if (nome4 == "") {
resposta4.innerText = "Digite um nome primeiro!"
} else {
resposta4.innerText = "Olá, " + nome4
}
}

// 5 - Mudança de Cor do Fundo
function modoEscuro() {
document.body.style.backgroundColor = "black"
}

// 6 - Mostrar Mensagem de Aprovação
let resposta6 = document.getElementById("resposta6")
function verificarNota() {

let nota6 = document.getElementById("nota6").value
if (nota6 >= 7) {
resposta6.innerText = "Aluno aprovado"
} else {
resposta6.innerText = "Aluno reprovado"
}
}

// 7 - Botão de Surpresa
let resposta7 = document.getElementById("resposta7")
function surpresa() {
resposta7.innerText = "Você encontrou a mensagem secreta!"
}

// 8 - Trocar Cor do Texto
let texto8 = document.getElementById("texto8")
function destacar() {
texto8.style.color = "red"
texto8.style.fontWeight = "bold"
}

// 9 - Mostrar Quantos Caracteres Foram Digitados
let resposta9 = document.getElementById("resposta9")
function contar() {
let texto = document.getElementById("texto9").value
resposta9.innerText = "Você digitou " + texto.length + " caracteres"
}

// 10 - Mudando a Cor do Texto
let texto10 = document.getElementById("texto10")
function mudarCor() {

texto10.style.color = "blue"
}

// 11 - Esconder Texto
let texto12 = document.getElementById("texto12")
function esconder() {
texto12.style.display = "none"
}

// 13 - Mostrar meses vividos
let resposta13 = document.getElementById("resposta13")
function calcularMeses() {
let idade = document.getElementById("idade13").value
resposta13.innerText = "Você já viveu " + (idade * 12) + " meses"
}

// 14 - Verificador de Maioridade
let resposta14 = document.getElementById("resposta14")
function verificarIdade() {
let idade = document.getElementById("idade14").value

if (idade >= 18) {
resposta14.innerText = "Você é maior de idade"
} else {
resposta14.innerText = "Você é menor de idade"
}
}