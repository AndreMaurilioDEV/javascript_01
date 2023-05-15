// FOR IN - RETORNA O ÍNDICE, [I]

const frutas = ['Mamão','Banana','Abacaxi'];
for(let i in frutas){
    console.log(frutas[i]);
}

console.log('-----------------');

// FOR OF  - RETORNA APENAS O VALOR(ARRAYS, STRINGS)


const pecas = ['motor','farol','capô','porta']
for(let valor of pecas){
    console.log(valor);
}