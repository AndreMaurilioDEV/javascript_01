const produto = {nome: 'nomeProduto', preco: 'Preço produto'};
Object.defineProperty(produto, 'nome', { // (objeto, propridade, configs)
    writable: false,
    configurable: true
});

const Caneca = {...produto, material: 'Porcelana'}; // spread operator pra copiar outro objeto
// copia chaves nome e preco do objeto produto e adiciona nova chave material

// OU : Object.assign - --- spread ainda é mais intuitivo --- 
const Caneca2 = Object.assign({}, produto, {cor: 'Branca'});

// OU: manualmente -- mais útil pra pegar apenas uma propriedade por exemplo
const Caneca3 = {nome: produto.nome, preco: produto.nome};

console.log(' ---- Object.keys ---- ')
console.log(Object.keys(produto)); // Object.keys - Mostra apenas as chaves do objeto
console.log('   ')

console.log(' ---- Object.values ---- ')
console.log(Object.values(produto)); //  Object.value - Mostras os valores das chaves do objeto
console.log('   ')

console.log(' ---- Object.entries ---- ')
console.log(Object.entries(produto)); // Object.entries - Mostra chave e valor
console.log('   ')
console.log('-- desestruturação do objeto com FOR e entries');
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}
console.log('   ')

console.log(' ---- Object.getOwnPropertyDescriptor ---- ')
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); 
// Olhas as configurações da propriedade nome do objeto produto
console.log('   ')

console.log(produto);

Caneca.nome = 'Caneca Anime';
Caneca.preco = 1;
console.log(Caneca);

Caneca2.nome = 'Caneca Futebol';
Caneca2.preco = 22;
console.log(Caneca2);

Caneca3.nome = 'Caneca Heróis'
Caneca3.preco = 10;
console.log(Caneca3);

// Configurable true
delete produto.preco;
console.log(produto);