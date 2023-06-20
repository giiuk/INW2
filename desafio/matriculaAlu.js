const leia = require("prompt-sync")()

let matriculas = ["MAT01", "MAT02", "MAT03","MAT04"]
let alunos = ["VIVIANE","PEDRO","MARIA", "JULIAN"]
let notas = [0,0,0,0]
let situacao = 


console.log("MAT\tALUNOS\tNOTAS\t")
console.log("--------------------")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i])
} 

console.log("--------------------")
console.log("DIGITAÇÃO DE NOTAS")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i])
    notas[i] = leia("Digite a nota: ")
} 

console.log("-------------------")
console.log("MAT\tALUNOS\tNOTAS\t")
for(let i=0; i<matriculas.length; i++){
   if(notas[i]>5){
       situacao = 'APROVADO'
   }
   else{
       situacao = 'REC'
   }
   console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao[i])
} 

console.log("--------------------")
console.log("ALTERAÇÃO DE DADOS")
    let matrícula = leia("Digite a matricula do aluno que deseja trocar a nota: ")
    for(let i=0; i<matriculas.length;i++){
        if(matrícula == matriculas[i]){
            console.log(alunos[i]+" nota atual  " +notas[i])
            notas[i] = leia("Digite a nova nota do aluno: ")
    }
 }

 console.log("-------------------")
 console.log("MAT\tALUNOS\tNOTAS\t")
for(let i=0; i<matriculas.length; i++){
    if(notas[i]>5){
        situacao = 'APROVADO'
    }
    else{
        situacao = 'REC'
    }
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao[i])
} 
console.log("--------------------")





