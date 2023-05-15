//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (OBJETO)

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Avenida',
        numero: 75
    }
};

const { nome, sobrenome, idade } = pessoa; // extraiu do objeto(pessoa) as chaves(nome,sobrenome,idade) *ps. em ordem*
//const { nome: n, sobrenome, idade } = pessoa; // chave nome virando variavel n
console.log(nome, sobrenome, idade);

const {endereco: {rua, numero}} = pessoa; // extrai chaves separadas do endereco
console.log(rua);

const{endereco} = pessoa; // extrai o objeto inteiro
console.log(endereco);


//const { nome, ...resto} = pessoa; // nome separado e o resto(operator) é o que sobrou
//console.log(nome, resto);