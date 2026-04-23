// 1 - Arredondando Número com round
function arredondar(){
let numero = document.getElementById ("numero").value
let resultado = document.getElementById("resultado")
resultado.innerText = "Resultado: " + Math.round(numero)
}

// 2 - Arredondamento para Baixo
function arredondar2(){
let numero2 = document.getElementById ("numero2").value
let resultado2 = document.getElementById("resultado2")
resultado2.innerText = "Resultado: " + Math.floor(numero2)
}

// 3 - Arredondamento para Cima
function arredondar3(){
let numero3 = document.getElementById ("numero3").value
let resultado3 = document.getElementById("resultado3")
resultado3.innerText = "Resultado: " + Math.ceil(numero3)
}

// 4 - Raiz Quadrada
function raiz(){
let numero4 = document.getElementById ("numero4").value
let resultado4 = document.getElementById("resultado4")
resultado4.innerText = "Resultado: " + Math.sqrt(numero4)
}

// 5 - Potência de Número
function potencia(){
let base = document.getElementById ("base").value
let expoente = document.getElementById ("expoente").value
let resultado5 = document.getElementById("resultado5")
resultado5.innerText = "Resultado: " + Math.pow(base, expoente)
}

// 6 - Maior Número
function maior_num(){
let primeiro_numero = document.getElementById ("primeiro_numero").value
let segundo_numero = document.getElementById ("segundo_numero").value
let terceiro_numero = document.getElementById ("terceiro_numero").value
let resultado6 = document.getElementById("resultado6")
resultado6.innerText = "Resultado: " + Math.max(primeiro_numero, segundo_numero, terceiro_numero)
}

// 7 - Menor Número
function menor_num(){
let primeiro_numero2 = document.getElementById ("primeiro_numero2").value
let segundo_numero2 = document.getElementById ("segundo_numero2").value
let terceiro_numero2 = document.getElementById ("terceiro_numero2").value
let resultado7 = document.getElementById("resultado7")
resultado7.innerText = "Resultado: " + Math.min(primeiro_numero2, segundo_numero2, terceiro_numero2)
}

// 8 - Sorteio de Número
function sorteio() {
let numero8 = Math.floor(Math.random() * 10)
document.getElementById("sorteio").innerText = "Número sorteado: " + numero8
}

// 9 - Simulador de Dado
function simulador() {
let numero9 = Math.floor(Math.random() * 6) + 1
document.getElementById("simulador").innerText = "O número que caiu é: " + numero9
}






