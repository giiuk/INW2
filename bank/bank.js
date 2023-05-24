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

//SUBCLASSE POUPANÇA
class poupanca extends Conta{
    constructor(numero, cpf, saldo,ativo, diaAniversarioConta){
        super(numero,cpf,saldo,ativo,diaAniversarioConta);
        this.diaAniversarioConta = diaAniversarioConta
    }

    correcao(dia){
        console.log("Aplicando correção...")
        if(this.diaAniversarioConta){
            this.saldo = (this.saldo * 0.05)+this.saldo
            console.log("Sua conta foi devidamente corrigida!")
        }else{
            console.log("Podemos identificar que essa não é a data de correção")
        }
    }
}


if (tipo=="1"){
    console.log("CONTA POUPANÇA")
    let numero = parseInt(leia("Digite o número da conta: "))
    let cpf = leia("Digite o cpf: ")
    let diaAniversarioConta = leia("Digite o dia : ") 
    let dia = leia("Digite o dia atual: ") 
    let cp = new poupanca(numero,cpf,0,false,diaAniversarioConta,dia)
    cp.ativar()


    for (let x=1; x<=10; x++){
        console.log("MOVIMENTO "+x)
        console.log(`Saldo atual da conta R\$ : ${cp.saldo}`)
        valor = parseInt(leia("Digite o valor que desejar remover ou inserir: "))
        op = leia("Digite D para débito ou C para crédito: : ").toUpperCase()
        if(op=="C"|| op =="c"){
            cp.credito(valor)
        }
        else if (op=="D"|| op =="d"){
            cp.debito(valor)
        }
}
console.log(cp.correcao(dia))
console.log("Saldo final R$: "+cp.saldo)
}


//SUBCLASSE CORRENTE 
class Corrente extends Conta {
    constructor(numero, cpf, saldo,ativa, contadorTalao) {
      super(numero, cpf, saldo,ativa);
      this.contadorTalao = contadorTalao;
      this.quantidadeTaloes = 0;
    }
  
    pediTalao() {
      if (this.quantidadeTaloes < 3) {
        this.saldo -= 30; // Debite R$ 30 do saldo para o talão
        this.quantidadeTaloes++;
        console.log("Seu talão foi solicitado com sucesso!");
      } 
      
      if(this.contadorTalao == 3){
            console.log("Você já atingiu o limite de 3 talões");
        } else if(this.saldo < 30){
            console.log("Saldo insuficiente para solicitar talão")
        } else {
            this.debito(30);
            console.log("Saldo: "+this.saldo )
            this.contadorTalao++
        }
    }
  }


  if (tipo=="2"){
    console.log("CONTA CORRENTE")
    let numero = parseInt(leia("Digite o número da conta: "))
    let cpf = leia("Digite o cpf: ")
    let pedir=""
    const co1 = new Corrente(numero, cpf, 0, false, 0)
    co1.ativar()
  }

  for( let x = 1; x <= 10; x++){
    console.log("MOVIMENTO: "+ x)
    console.log("Saldo atual da conta: " + co1.saldo)

    op = leia("Digite D para débito ou C para crédito: ")
    if(op == "D" || op =="d"){
        valor = parseInt(leia("Digite o valor para debito: "))
        co1.debito(valor)
    } else if(op == "C" || op =="c"){
        valor = parseInt(leia("Digite o valor para credito: "))
        co1.credito(valor)
    }o
    console.log("Saldo atual da conta: " + co1.saldo)

    if(x == 10){
        pedir = leia("Gostaria de solicitar um talão? (S/N) ");
        if(pedir == "S" || pedir == "s"){
            co1.pediTalao();
        }
    }
}





//CONTA ESPECIAL
class Especial extends Conta{
    constructor(numero, cpf, saldo,ativo, limite){
        super(numero,cpf,saldo,ativo);
        this.limite = limite
    }
    usarLimite(valor){
       console.log("usando limite")
       if(this.ativo){
        if(valor < 0){
            console.log("Impossível realizar, valor negativo")
        } 
        else if(valor==0){
            console.log("Impossível realizar, valor zerado")
        }
        else if (valor > this.saldo + this.limite) {
            console.log("Impossível realizar, saldo e limite indisponíveis");
          } 
          else if(valor >(this.saldo + this.limite)){
            console.log("Impossível realizar, sem valor no limite e saldo...")
        }
          else {
            if (valor > this.saldo) {
              const saldoRemanente = valor - this.saldo;
              this.saldo = 0;
              this.limite -= saldoRemanente;
            } else {
              this.saldo -= valor;
            }
          }
        } else {
          console.log("Conta inativa...");

       }
    }
}


const ep = new Especial(numero, cpf, saldo, ativo, limite)

  for (let x = 1; x <= 10; x++) {
    console.log("CONTA ESPECIAL");
    console.log("Saldo Atual: R$ " + ep.saldo)
    const op = leia("MOVIMENTO - D - débito ou C - crédito: ")
    const valor = parseFloat(leia("Valor do movimento: R$ "))

    if (op == "D"|| op=="d") {
      ep.debito(valor)
    } else if (op == "C"|| op=="c") {
      ep.credito(valor)
    }
  }console.log("Limite atual da conta: R$" +ep.limite)
  console.log("Saldo final da conta: R$" +ep.saldo)
   



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

//c1.ativar()
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


