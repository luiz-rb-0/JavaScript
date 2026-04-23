//DOM- Math
let numero = 5.3
let numero2 = 5.9

//Arredondar
console.log("-------------------------------")
console.log(Math.round(numero)) //5
console.log(Math.round(numero2)) //6
console.log("-------------------------------")

console.log(Math.floor(numero)) //5
console.log(Math.floor(numero2)) //5
console.log("-------------------------------")

console.log(Math.ceil(numero)) //6
console.log(Math.ceil(numero2)) //6
let n = Math.ceil(numero)
console.log("-------------------------------")

//Numero aleatório
console.log(Math.random())
let a = Math.round(Math.random() * 10) //0 e 10
let b = Math.floor(Math.random() * 10 + 1) //1 e 10
//20 e 40
let c = Math.floor(Math.random()*(40 - 20 + 1)) + 20
console.log(a)
console.log(b)
console.log(c)
console.log("-------------------------------")

//Max e Min
console.log(Math.max(10, 5, 33, 12, 6))
console.log(Math.min(10, 5, 33, 12, 6))
console.log("-------------------------------")

//Potência
console.log(Math.pow(2,3)) //2³
console.log(Math.pow(57, 9))
console.log("-------------------------------")

//Raiz Quadrada
console.log(Math.sqrt(81)) //9
console.log(Math.sqrt(25)) //5

/* Um aluno recebeu as seguintes notas: 9, 6 e 8. Calcule a média, arredonde para baixo e mostre, "Aprovado", caso a nota seja maior ou igual a 8 ou "Reprovado caso contrário*/

let media = (9 + 6 + 8) / 3
let situacao = Math.floor(media)
console.log("A média é " + situacao)
if (situacao > 8) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}