let nome = "Luiz"
let maiuscula = nome.toUpperCase()
let minuscula = nome.toLowerCase()

console.log(nome)
console.log(maiuscula)
console.log(minuscula)
//equalsIgnoreCase
//if(nome.toLowerCase() == "Luiz")

// --------------------------------

function mudar() {
    let texto = document.getElementById("texto").value
    let maiusculo = document.getElementById("maiusculo")
    let minusculo = document.getElementById("minusculo")
    let letras = document.getElementById("letras")

    maiusculo.innerText = texto.toUpperCase()
    minusculo.innerText = texto.toLowerCase()
    letras.inner = texto.length
    console.log("-------------------")
    console.log(texto[0])
}

function parte() {
    let palavra = document.getElementById("palavra").value
    let palavra1 = document.getElementById("palavra")
    let resultado = document.getElementById("resultado")

    // SLICE(INICIO, FIM)
    let parte = palavra.slice(0, 3)
    // C A N E T A
    // 0 1 2 3 4 5
    resultado.innerText = parte
    palavra1.value  = "" //para apagar o input

    let final = document.getElementById("final")
    // S E N A I
    // 0 1 2 3 4
    // LENGTH = 5
    final.innerText = palavra[palavra.length-1] //palavra[4]
}

function juntar() {
    let palavra1 = document.getElementById("palavra1").value
    let palavra2 = document.getElementById("palavra2")
    let juntos = document.getElementById("juntos")

    juntos.innerText = palavra1 + palavra2
}