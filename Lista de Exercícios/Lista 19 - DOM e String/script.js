//1 - Nome em Minúsculo

function converter() {
    let nome = document.getElementById("nome").value
    let minusculo = document.getElementById("minusculo")
    minusculo.innerText = nome.toLowerCase()
    console.log("----------------------------------")
}


//2 - Quantidade de Letras do Nome

function contar() {
    let palavras = document.getElementById("palavras").value
    let letras = document.getElementById("letras")
    letras.innerText = palavras.length
}


//3 - Mostrar Última Letra

function mostrar() {
    let palavra1 = document.getElementById("palavra1").value
    let ultimo = document.getElementById("ultimo")
    ultimo.innerText = palavra1[palavra1.length-1]
}


//4 - Mostrar Primeiras 4 Letras

function revelar() {
    let palavra2 = document.getElementById("palavra2").value
    let quatro = document.getElementById("quatro")
    quatro.innerText = palavra2.slice(0, 4)

}

//5 - Mostrar Últimas 3 Letras
function ex5(){
    let ex5 = document.getElementById("texto5").value
    let ultimasTres = document.getElementById("ex5")
    ultimasTres.innerText = ex5.slice(-3)
}

//6 - Nome e Sobrenome
function ex6(){
    let nome = document.getElementById("nome6").value
    let sobrenome = document.getElementById("sobrenome6").value
    let resultado = document.getElementById("ex6")
    resultado.innerText = "Nome completo: " + nome + " " + sobrenome
}

//7 - Primeira Letra em Destaque
function ex7(){
    let ex7 = document.getElementById("nome7").value
    let primeiraLetra = document.getElementById("ex7")
    primeiraLetra.innerText = "A primeira letra do seu nome é: " + ex7.slice(0,1).toUpperCase()
}

//8 - Mensagem com Nome Formatado
function ex8(){
    let ex8 = document.getElementById("nome8").value
    let nomeFormatado = document.getElementById("ex8")
    nomeFormatado.innerText = "Olá, " + ex8.toUpperCase() + "! Seja bem-vinda ao sistema."
}

//9 - Verificar Nome Curto ou Longo
function ex9(){
    let nome = document.getElementById("nome9").value
    let resultado = document.getElementById("ex9")

    if(nome.length <= 5){
        resultado.innerText = "Nome curto"
    } else {
        resultado.innerText = "Nome longo"
    }
}