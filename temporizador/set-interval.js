function mostrarHora(){

    let data = new Date();
    return data.toLocaleTimeString('pt-br')
        
    };


//function funcaoIntervalo(){
  //  console.log(mostrarHora());
//}

const timer = setInterval(function (){ // função anônima 
    console.log(mostrarHora());
}, 1000);


setTimeout(function(){ // para o intervalo a partir de 3 segundos
    clearInterval(timer);
}, 3000);