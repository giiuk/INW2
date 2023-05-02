let aviao = {
    tipo: "Bimotor",
    velocidade: 0,
    ligado: false,
    velocidadeMAX: 800,
    qtdePassageiros: 12,

    ligar: function(){
        this.ligado = true
        console.log("Avião ligado...")
    },
    desligarAV :  function(){
        this.ligado = false
        console.log("Avião desligado.")
    },
    acelerar: function(){
        if(this.ligado && this.velocidade<this.velocidadeMAX){
            this.velocidade = this.velocidade + 10
        }
        console.log("Velocidade atual:"+ this.velocidade)
        console.log("Acelerando...")
    }
}

//programa avião'
//vou sair com o avião
aviao.ligar();
for(let x=1;x<=20;x++){
    aviao.acelerar();
    console.log("Velocidade atual: " +aviao.velocidade)
}
