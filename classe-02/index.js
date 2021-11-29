const carro = {
    ligado: false,
    velocidade: 0,
    ligar() {
        if (this.ligado) {
            console.log("Este carro já está ligado.")
        } else {

            this.ligado = true;
            this.status()
        }
    },
    desligar() {
        if (this.ligado) {
            this.ligado = false;
            this.velocidade = 0;
            this.status()
        } else {
            console.log("Este carro já está desligado.")
        }

    },
    acelerar() {
        if (this.ligado === false) {
            console.log("Não é possível acelerar um carro desligado.")
        } else {
            this.velocidade = this.velocidade + 10;
            this.status()
        }
    },
    desacelerar() {
        if (this.ligado === false) {
            console.log("Não é possível desacelerar um carro desligado.")
        } else {
            this.velocidade = this.velocidade - 10
            this.status()
        }
    },

    status() {
        console.log(`Carro ${this.ligado ? 'ligado' : 'desligado'}. Velocidade ${this.velocidade}km/hr .`)
    }

}

//carro.desligar();
//carro.ligar();
//carro.desligar();
//carro.desligar();
//carro.acelerar();
//carro.desacelerar();
//carro.desligar();

carro.ligar();
carro.acelerar();
//carro.desacelerar();

