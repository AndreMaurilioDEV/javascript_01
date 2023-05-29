function verificacao(){
return{
inputMarca: document.querySelector('.marca'),

inicia(){
    this.cliqueBotao();
    
},

verificacaoMarca(){


    const marca = this.inputMarca.value;
    if(marca != 'Samsung'){
        alert('Marca Indisponível');
        return;
    }else{
        alert('Verificando disponibilidade');
    }
},

cliqueBotao(){
    document.addEventListener('click', (e) => {
       const elemento = e.target;
       if(elemento.classList.contains('btn')){
        this.verificacaoMarca();
       }
    })
}


}
};

const teste = verificacao();
teste.inicia();