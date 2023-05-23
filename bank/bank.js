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

//SUBCLASSE ESTUDANTIL
class poupanca extends Conta{
    constructor(numero, cpf, saldo,ativo, diaAniversarioConta){
        super(numero,cpf,saldo,ativo,diaAniversarioConta);
        this.diaAniversarioConta = diaAniversarioConta
    }

    correcao(dia){
        console.log("Aplicando correção")
    }
}

class Corrente extends Conta {
    constructor(numero, cpf, saldo, contadorTalao) {
      super(numero, cpf, saldo);
      this.contadorTalao = contadorTalao;
      this.quantidadeTaloes = 0;
    }
  
    pediTalao() {
      if (this.quantidadeTaloes < 3) {
        this.saldo -= 30; // Debite R$ 30 do saldo para o talão
        this.quantidadeTaloes++;
        console.log("Seu cheque foi solicitado com sucesso!");
      } else {
        console.log("Limite máximo de cheques atingido!");
      }
    }
  }

class Especial extends Conta{
    constructor(numero, cpf, saldo,ativo, limite){
        super(numero,cpf,saldo,ativo);
        this.limite = limite
    }

    usarLimite(valor){
       console.log("usando limite")
    }
}







//SUBCLASSE ESTUDANTIL
class estudantil extends Conta{
    constructor(numero, cpf, saldo,ativo, limiteEstudantil){
        super(numero,cpf,saldo,ativo);
        this.limiteEstudantil = limiteEstudantil
    }

    usarEstudantil(valor){
        if (valor <0) {
            console.log("Impossível realizar, valor negativo")
        }

        else if (valor ==0) {
            console.log("Impossível realizar, valor zerado")
        }

        else if(valor >(this.saldo + this.limiteEstudantil)){
            console.log("Impossível realizar, sem valor no limite e saldo...")
        }
        else{
            this.valor.limiteEstudantil = this.limiteEstudantil - valor
            credito(valor) 
        }
    }
}



// PROGRAMA PRINCIPAL
const leia = require("prompt-sync")()
let opcao = ""

do{
    console.log("")
    console.log("1 - CONTA POUPANÇA")
    console.log("2 - CONTA CORRENTE")
    console.log("3 - CONTA ESPECIAL")
    console.log("4 - CONTA ESTUDANTIL")
    console.log("5 - SAIR")
    opcao = leia("Digite o número da sua opção: ")
    if(opcao =="1"){
        console.log("CONTA POUPANÇA")
        let numero = leia("Digite o numero da conta: ")
        let cpf = leia("Digite o cpf da conta:")
        let diaAniversarioConta = leia("Digite o dia do aniversário da conta: ")
        let cp1 = new poupanca(numero,cpf,0,false,diaAniversarioConta)
        for(let x=1;x<=10;x++){
            valor=leia("Digite o valor: ")
            op = ("Digite D para débito ou C para crédito")
            if(op=="D"){
                cp1.debito(valor)
            }else if(op=="C"){
                cp1.credito(valor)
            }
            console.log("Saldo atual R$: "+cp1.saldo)
        }
         valor =leia("Usar limite ? valor: ")    
         cee1.usarEstudantil(valor)
         console.log("Saldo final: "+cee1.saldo)


    }
    else if(opcao =="2"){
        console.log("Testando conta corrente")
        
    }
    else if(opcao =="3"){
        console.log("Testando conta especial")
    }
    else if(opcao =="4"){
        console.log("CONTA ESTUDANTIL")
        let numero = leia("Digite o numero da conta: ")
        let cpf = leia("Digite o cpf da conta:")
        //0,false,5000
        let cee1 = new estudantil(numero,cpf,0,false,5000)
        let op=""
        let valor = 0
        for(let x=1;x<=10;x++){
            valor=leia("Digite o valor: ")
            op = ("Digite D para débito ou C para crédito")
            if(op=="D"){
                cee1.debito(valor)
            }else if(op=="C"){
                cee1.credito(valor)
            }
            console.log("Saldo atual R$: "+cee1.saldo)
        }
    }
   else if(opcao =="5"){
        console.log("Saindo do programa....")
    }
    else{
        console.log("Digitação invalida....")
    }
} while(opcao != "5")
console.log("Fim de programa volte sempre")



console.log("Digite o número da sua opção: ")
let numero = parseInt(leia("Digite o número da conta: "))
let cpf = leia("Digite o cpf da conta: ")
let c1 = new Conta(numero, cpf, 0, false)
let op=""

let valor = 0
// c1.ativar()
// for (let x=1; x<=10;x++){
//     console.log("Movimento: "+x)

//     op = leia("Digite D para debito ou C para credito: ")
//     if(op=="D"){
//         valor = parseInt(leia("Digite o valor para debito: "))
//         c1.debito(valor)
//     }
//     else if(op=="C"){
//         valor = parseInt(leia("Digite o valor para credito: "))
//         c1.credito(valor)
//     } 
// }
// console.log("Saldo atual da conta: "+c1.saldo)

//montando menu
