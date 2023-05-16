// CLASSSES

class Conta {
    constructor(numero, cpf, saldo, ativo) {
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo
    }
    ativar() {
        this.ativo = true
    }

    credito(valor) {
        if (this.ativo) {
            if(valor<0){
                console.log("Impossível realizar, valor negativo")
            }
            else if(valor==0){
                console.log("Impossível realizar, valor zerado")
            }
            else{
                this.saldo += saldo
            }
            
            this.saldo += valor
        1
    }
        else{
            console.log("Conta inativa...")
        }
}
    debito(valor) {
        if (this.ativo) {
            if (valor < 0) {
                console.log("Impossível realizar, valor negativo")
            }

            else if (valor == 0) {
                console.log("Impossível realizar, valor zerado")
            }

            else if (valor > this.saldo) {
                console.log("Impossível realizar, saldo indisponível")
            }

            else {
                this.saldo -= valor
            }

        }
        else {
            console.log("Conta inativa...")
        }

    }

}




// PROGRAMA PRINCIPAL
const leia = require("prompt-sync")()
let numero = parseInt(leia("Digite o número da conta: "))
let cpf = leia("Digite o cpf da conta: ")
let c1 = new Conta(numero, cpf, 0, false)
let op=""
let valor = 0
c1.ativar()
for (let x=1; x<=10;x++){
    console.log("Movimento: "+x)

    op = leia("Digite D para debito ou C para credito: ")
    if(op=="D"){
        valor = parseInt(leia("Digite o valor para debito: "))
        c1.debito(valor)
    }
    else if(op=="C"){
        valor = parseInt(leia("Digite o valor para credito: "))
        c1.credito(valor)
    } 
}
console.log("Saldo atual da conta: "+c1.saldo)
