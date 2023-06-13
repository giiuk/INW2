// let equipe1 = 'SFC'
// let equipe2 = 'SPFC'
// let equipe3 = 'SCCP'
// let equipe4 = 'SEP'


// let pontos1 = 3
// let pontos2 = 3
// let pontos3 = 3
// let pontos4 = 3

// console.log("TIME\tPONTOS")
// for(let i=0; i<4; i++){
//     console.log(equipes[i]+ '\t' +pontos[1])
// }


// console.log(equipes[0]+"\t"+pontos[0])
// console.log(equipes[1]+"\t"+pontos[1])
// console.log(equipes[2]+"\t"+pontos[2])
// console.log(equipes[3]+"\t"+pontos[3])


const leia = require("prompt-sync")()
// arrays ou vetores
let equipes = ['SFC','SPFC', 'SCCP', 'SEP']
let pontos = [0,0,0,0]

for(let x=0; x<equipes.length; x++){
    console.log(equipes[x])
    pontos[x] = parseInt(leia("Digite quantos pontos: "))
}

console.log("TABELA")
console.log("TIME\tPONTOS")
for(let x=0; x<equipes.length; x++){
    console.log(equipes[x]+'\t'+pontos[x])
}




