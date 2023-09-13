//criar promises dentro de uma função

function falarDepoisDE(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    });
}

//chamada da função

falarDepoisDE(4,"Testee de promises no 2MIB")
.then(frase => frase.concat(" programando em vscode!!!"))
.then(novaFrase => console.log(novaFrase))