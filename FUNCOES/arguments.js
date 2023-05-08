function somar(){
    /* Arguments - Pega os argumentos passados para a função*/ 
    let total = 0;
    for(i = 0; i < arguments.length; i++){
        total += arguments[i];
    }

    return total;
}

console.log(somar(1,5,10));
