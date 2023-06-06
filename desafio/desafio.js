const leia = require("prompt-sync")()

// LEIA NOME USUÁRIO
// LER SALÁRIO
// SE O SALARIO FOR MENOR DE 2500 A PESSOA É ISENTA
// SE O SALARIO FOR ACIMA DE 2500 E MENOR IGUAL A 5000
// PAGA IMPOSTO DE 15% - MONSTRA IMPOSTO E SALARIO LIQUIDO
// SE O SALARIO FOR ACIMA DE 5000 PAGA IMPOSTO DE 25%
// MOSTRA SALARIO LIQUIDO E IMPOSTO A PAGAR



//VARIAVEIS
let usuario
let salario
let valorImposto

//VARIAVEIS
 usuario = leia("Digite o nome do usuário: ")
 salario = parseFloat(leia("Digite o valor do salário: "))

 if(salario <= 2500){
    console.log(usuario + " você é isento!!!")
 }
 else if(salario > 2500 && salario <= 5000){
    valorImposto = salario * 0.15
    console.log("Olá Sr.(a) " +usuario+  " seu imposto é:" +valorImposto)
    console.log("Seu salário liquido é: " +(salario-valorImposto))

 }
 else{
    valorImposto = salario * 0.25
    console.log("Olá Sr. " +usuario+  "seu imposto é: " +valorImposto)
    console.log("Seu salário liquido é: " +(salario-valorImposto))
 }





 //FIM DO PROGRAMA
 console.log("Fim do programa. ")