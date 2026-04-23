//JS
let trocar = document.getElementById("trocar") //botao

trocar. addEventListener("click", function() {
let titulo = document.getElementById("titulo")

if(titulo. innerText == "Outro texto") {
titulo.innerText = "Titulo do site"
} else {
titulo.innerText = "Outro texto"
}
})
// ------------------------------------------------------
let contador = document.getElementById("contador")
let numero = document.getElementById("numero")
let cliques = 0

contador.addEventListener("click", function() {
    cliques++
    numero.innerText = cliques
})
//-------------------------------------------
let input = document.getElementById("input")
let texto = document.getElementById("texto")
//vamos usar o .value depois
input.addEventListener("input", function() {
texto.innerText = input.value
//pode usar o .value a qualquer momento
})
// ------------------------------------------
let mudar = document.getElementById("mudar")
mudar.addEventListener("mouseover", function() {
   if (mudar. innerText == "Voce achou o texto secreto") {
mudar. innerText = "texto inicial"
   } else {
mudar. innerText = "Voce achou o texto secreto"
   }
})
//------------------------------------------
let imagem = document.getElementById("imagem")
//Ativa quando passa o mouse
imagem.addEventListener("mouseover", function(){
    imagem.src = "https://thumbs.dreamstime.com/z/livro-aberto-9824386.jpg" //nome ou caminho da sua imagem
})
//Ativa quando sai o mouse
imagem.addEventListener("mouseout", function(){
imagem.src = "https://static.vecteezy.com/ti/vetor-gratis/p1/14629329-livro-fechado-icone-estilo-simples-vetor.jpg"
})
