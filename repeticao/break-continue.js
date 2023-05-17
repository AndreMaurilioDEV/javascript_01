const numeros = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < numeros.length; i++){
    let numero = numeros[i];
    if(numero === 2){
        console.log('Número 2 pulado')
        continue; // continua para próxima iteração
    }

    if(numero === 7){
        break; // sai do laço
    }

    console.log(numero);
}