// arguments

function funcao(){
    let total = 0;
    for(let argumentos of arguments){
        total += argumentos;
    }

    console.log(total);
}
funcao(1,5,6,7,8);


function conta(operador,acumulador, ...numeros){ // resto é sempre o ultimo parâmetro
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
        
    }
    console.log(acumulador);
}

conta('+', 200 ,10,50,80,);
conta('-', 200 ,10,50,80,);
conta('*', 200 ,10,50,80,);
conta('/', 200 ,10,50,80,);