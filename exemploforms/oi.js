
// console.log("Hello World!")
// console.log("TURMA \n2MIB")

// console.log("NOME\tNOTA\tTURMA\t")
// console.log("Pedro\t10\t2MIC")
// console.log("Carla\t7\t2MIC")

// let nome = "Pedro"

// let valor1 = 10
// let valor2 = 20
// let valor3 = valor1+valor2

// console.log("Oi meu amigo(a) " +nome.toLowerCase())
// console.log("A soma dos dois valores é:  " +valor3)

const leia = require("prompt-sync")()
let numero1, numero2 = 0 

numero1 = parseInt(leia("Digite o primeiro numero: "))
numero2 = parseInt(leia("Digite o segundo numero: "))

console.log("a soma de " +numero1+ " mais " +numero2+ " é " +(numero1+numero2))