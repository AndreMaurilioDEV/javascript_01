

// FOR IN - RETORNA INDICE OU CHAVES(STRING, ARRAY, OBJETOS)

const pessoa = {
    nome: 'André',
    sobrenome: 'Maurilio',
    idade: 22,
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]); // pega o valor da chave no objeto pessoa
}

console.log('---------------------------');

const frutas = ['Mamão','Banana','Abacaxi'];
for(let i in frutas){
    console.log(frutas[i]);
}