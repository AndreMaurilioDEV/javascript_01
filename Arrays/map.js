//  MAP
// pode receber valor,indice, array de callback, igual o filter;
// nao altera array original
const numeros = [10, 50, 55, 40, 5, 1, 6, 22, 27, 11];

const numerosDobro = numeros.map( valor => valor * 2);
console.log(numerosDobro);


const pessoas = [
    {nome: 'André' , idade: 22},
    {nome: 'Maria' , idade: 20},
    {nome: 'José' , idade: 56},
    {nome: 'João' , idade: 35},
    {nome: 'Augusto' , idade: 14},
    {nome: 'Julia' , idade: 18},
    {nome: 'Rodrigo' , idade: 11}
];




console.log('------- Retorna apenas nomes -------')
const apenasNome = pessoas.map(valor => valor.nome);
console.log(apenasNome);



console.log('------- Remove chave nome -------')
const removeChaveNome = pessoas.map( obj => ( delete obj.nome , obj) );
console.log(removeChaveNome);



console.log('------- Adiciona chave ID -------')
const addID = pessoas.map( function(obj, indice){
  //obj.id = (indice + 1)*1000; //  altera o original, já que obj é o objeto original da array

  const newObj = {...obj}; // apenas copiou o objeto original, usando o spread operator, não alterando original
  newObj.id = (indice +1) * 1000;
  return newObj;

});

console.log(addID);




