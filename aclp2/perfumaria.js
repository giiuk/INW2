class produtoPerfumes{
    constructor(id,descricao,ativo,estoque,preco,quantidadeProduto,nomeProduto){
        this.id = id;
        this.descricao = descricao;
        this.ativo = ativo;
        this.estoque = estoque;
        this.preco = preco;
        this.quantidadeProduto = quantidadeProduto;
        this.nomeProduto = nomeProduto
    }
    ativo(){
        this.ativo = true
    }
    retirarEstoque(quantidade) {
        if (quantidade <= this.estoque) {
          this.estoque -= quantidade;
        } else {
          console.log("Estoque insuficiente.");
        }
      }
    
      incluirEstoque(quantidade) {
        if (this.estoque + quantidade <= 10) {
          this.estoque += quantidade;
        } else {
          console.log("Limite máximo de estoque atingido.");
        }
      }
    }



const leia = require("prompt-sync")()
let opcao = ""

do{
    console.log("Perfumaria Gibis")
    console.log("Envoltos em Fragrâncias, Celebramos a Essência da Beleza")
    opcao = leia("DESEJA FAZER COMPRAS?: (S/N)  ")
    if(opcao =="S" | opcao=="s"){
        console.log("CADASTRO INICIAL")
        let id = leia("Digite o id do produto: ")
        let descricao = leia("Digite a descrição do produto: ")
        let preco = leia("Digite o preço unitário do produto: ")
        let nomeProduto = leia("Digite o nome do produto: ")
        let quantidadeProduto =  leia("Digite a quantidade em ml do produto: ")
        console.log("PRODUTO CADASTRADO!!!")
        let produto1 = new produtoPerfumes(id,descricao,0,false,quantidadeProduto,nomeProduto)
        
    }
} while(opcao != "N")
console.log("ATÉ BREVE!!!")
