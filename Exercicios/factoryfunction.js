function carro(cor,modelo,placa,ano){
    return{
        cor,
        modelo,
        placa,
        ano,

        get dadosCarro(){
        return `COR:${cor} MODELO:${modelo} PLACA:${placa}  ANO:${ano} `
        },

    }
}

const carro1 = carro('Vermelho', 'Celta', 'KYQ-98Z7', '2009');
console.log(carro1.dadosCarro);

