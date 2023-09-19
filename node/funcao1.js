//criando função
function escreverNoConsole(){
    console.log("Escrevendo na tela usando função!!!")
}

escreverNoConsole();


const textoNoConsole = function(){
    console.log("Segundo exemplo, escrevendo no console")
}

textoNoConsole();

const textoPorParametro = function(texto){
    console.log(texto)
}

textoPorParametro("Terceiro exemplo, esse texto é o parametro!!!");

const textoUsandoArrow = (texto) => console.log(texto)
textoUsandoArrow("Quarto exemplo usando arrow function")

//função arrow que recebe um numero e mostra na tela o numero e diz se é par ou impar, negativo ou zerado

const monstrarParImpar = (numero) => {
    if(numero < 0){
        console.log(numero, "o numero digitado é negativo")
    }
    else if(numero == 0){
        console.log(numero,"o numero digitado é neutro")
    }
    else if ((numero%2)==0){
        console.log(numero,"o numero digitado é par")
    }
    else{
        console.log(numero,"o numero digitado é impar")
    }
}

monstrarParImpar(1351)