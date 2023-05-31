function recursiva(max){
    if(max >= 10) return; // se o max for maior que 10 a function para(return)
    max++; // incremento
    console.log(max);
    recursiva(max);
    
}

recursiva(0); // começa a incrementar do 0
console.log('-------------------------')
recursiva(5); // começa a incrementar do 0