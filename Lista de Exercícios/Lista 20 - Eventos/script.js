//1 - Trocar texto
let mudar = document.getElementById("mudar") //botao
mudar.addEventListener("click", function() {
let texto = document.getElementById("texto")
 if(texto.innerText == "Você clicou no botão!") {
texto.innerText = "Você ainda não clicou no botão!"
} else {
texto.innerText = "Você clicou no botão!"
}
})

//2 - Mudar cor
let mudar2 = document.getElementById("mudar2")
mudar2.addEventListener("click", function() {
    let fundo2 = document.body
if(fundo2.style.backgroundColor == "green"){
    fundo2.style.backgroundColor = "white"
} else {
fundo2.style.backgroundColor = "green"
}
})

//3 - Contador Simples
let contador = document.getElementById("contador")
let numero = document.getElementById("numero")
let cliques = 0
contador.addEventListener("click", function() {
    cliques++
    numero.innerText = cliques
})

//4 - Botão de esconder
let revelar = document.getElementById("revelar")
revelar.addEventListener("click", function() {
   if (mudar3. innerText == "Você achou o texto secreto") {
mudar3. innerText = "texto inicial"
   } else {
mudar3. innerText = "Você achou o texto secreto"
   }
})

//5 - Espelho de texto e 6 - Texto em maiúsculo
let input5 = document.getElementById("input5")
let texto5 = document.getElementById("texto5")
input5.addEventListener("input", function() {
    texto5.innerText = input5.value.toUpperCase()
})

//7 - Contador de caracteres
let input7 = document.getElementById("input7")
let texto7 = document.getElementById("texto7")
input7.addEventListener("input", function() {
    let tamanho = input7.value.length
    texto7.innerText = "Você digitou "+ tamanho +" caracteres."
})

//8 - Validação simples
let validacao = document.getElementById("validacao")
let contadorInput = document.getElementById("contadorInput")
contadorInput.addEventListener("input", function () {
    if (contadorInput.value.length < 5) {
        validacao.innerText = "Texto muito curto"
    } else {
        validacao.innerText = "Texto válido"
    }
})

//9 - Mudar cor ao passar o mouse
let mudarCorMouse = document.getElementById("mudarCorMouse")
mudarCorMouse.addEventListener("mouseover", function () {
    mudarCorMouse.style.color = "green"
})
mudarCorMouse.addEventListener("mouseout", function () {
    mudarCorMouse.style.color = "black"
})

//10 - Mostrar mensagem
let botao10 = document.getElementById("botao10")
let texto10 = document.getElementById("texto10")
botao10.addEventListener("click", function() {
    texto10.innerText = "Você encontrou a mensagem escondida."
})
botao10.addEventListener("mouseout", function() {
    texto10.innerText = ""
})

//11 - Efeito surpresa
let texto11 = document.getElementById("texto11")
texto11.addEventListener("mouseover", function(){
    if(texto11.innerText == "Esse texto mudará...") {
        texto11.innerText = "Esse texto mudou"
    } else {
        texto11.innerText = "Esse texto mudará..."
    }
})

//12 - Desafio: Campo interativo
let input12 = document.getElementById("input12")
let texto12 = document.getElementById("texto12") 
input12.addEventListener("input", function (){
    texto12.innerText = input12.value
})
input12.addEventListener("mouseover", function () {
    texto12.style.color = "purple"
})
input12.addEventListener("mouseout", function () {
    texto12.style.color = "black"
})
let botao12 = document.getElementById("botao12")
botao12.addEventListener("click", function () {
    input12.value = ""
    texto12.innerText = ""
})


