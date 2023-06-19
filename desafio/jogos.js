const leia = require("prompt-sync")()

let aluno1, aluno2
let nota1, nota2

aluno1 = leia ("Digite o nome do aluno 1 :")
nota1 = leia ("Digite a nota do aluno 1 :")

aluno2 = leia ("Digite o nome do aluno 2 :")
nota2 = leia ("Digite a nota do aluno 2 :")

// se a nota 1 for menor que 5 mostra rec

if(nota1<5){
    console.log("Olá " +aluno1+ " você está de rec")
}
else{
    console.log("Olá " +aluno1+ " você está aprovado")
}


if(nota1<5){
    console.log("Olá " +aluno2+ " você está de rec")
}
else{
    console.log("Olá " +aluno2+ " você está aprovado")
}