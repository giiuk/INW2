// O USUARIO VAI DIGITAR NUMEROS
// 1-MOSTRAR O SOMATÓRIO DESTES NUMEROS
// 2- MOSTRAR QUAL FOI A MAIOR NUMERO DIGITADO
// 3- O PROGRAMA PARA DE SOLICITAR NUMEROS QUANDO O USUARIO DIGITAR UM NUMERO NEGAITIVO
// A SOMA DOS NUMEROS NÃO DEVE CONSIDERAR O NUMERO NEGATIVO

const leia = require("prompt-sync")()

let numero = 0 
let contador = -1
let total = 0
let maiorNumero = 0

do{
     total = total + numero
     if(numero>maiorNumero){
        maiorNumero = numero
     }
     contador++
    numero = parseInt(leia("Digite um número: "))
   
}while(numero>0)
console.log("Total: "+total)
console.log("Maior numero: " +maiorNumero)
console.log("Quantidade de números: " +contador)