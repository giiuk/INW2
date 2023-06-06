// // PROGRAMA PARA SOLICITAR O NOME E O ANO DE NASCIMENTO DA PESSOA 
// ANO REFERENCIA 2023

// SE A IDADE FOR MENOR QUE 3 ANOS ESCREVA - "Não atendemos bebês"

// SE A IDADE FOR MAIOR QUE 3 E MENOR QUE 13 ESCREVA- [NOME] - FAIXA INFANTIL

// SE A IDADE FOR MAIOR QUE 13 E MENOR QUE 17 ESCREVA - [NOME] - FAIXA ADOLESCENTE

// SE A IDADE FOR MAIOR QUE 17 E MENOR QUE 65 ESCREVA- [NOME] - FAIXA ADULTO

// SE A IDADE FOR MAIOR QUE 65 ESCREVA - "Não atendemos idosos"

const leia = require("prompt-sync")()
let nome
let anoNascimento
let idade 

nome = leia("Digite o seu nome: ")
anoNascimento = parseInt(leia("Digite o ano de nascimento: "))

idade = 2023 - anoNascimento

if(idade <= 3){
    console.log("Não atendemos bebês.")
}
else if(idade > 3 && idade <=13){
    console.log(nome+ " FAIXA INFANTIL")
}
else if(idade >13 && idade <=17){
    console.log(nome+ " FAIXA ADOLESCENTES")
}
else if(idade >17 && idade <=65){
    console.log(nome + " FAIXA ADULTOS")
}
else{
    console.log("Não atendemos idosos.")
}