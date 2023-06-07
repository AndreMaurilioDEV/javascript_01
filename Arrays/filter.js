// Filter - sempre retorna um array, com a mesma quantidade de elementos
// ou menos. Não altera o array original.
// pode receber valor,indice, array de callback
const numeros = [5,80,15,6,7,94,11,22,27,1,4];
function callbackFilter(valor){ // callback separado do filter
    return valor > 10;
};
const numerosFiltrados = numeros.filter(callbackFilter); // recebe o callback
console.log(numerosFiltrados);

// OU :
const filter = numeros.filter( valor => valor > 10); // recebe o callback já no filter
console.log(filter);

const pessoas = [
    {nome: 'André' , idade: 22},
    {nome: 'Maria' , idade: 20},
    {nome: 'José' , idade: 56},
    {nome: 'João' , idade: 35},
    {nome: 'Augusto' , idade: 14},
    {nome: 'Julia' , idade: 18},
    {nome: 'Rodrigo' , idade: 11}
];
console.log('------ Nome maior que 5 caracteres ---------')
const pessoaNomesGrandes = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoaNomesGrandes);

console.log('------- Idade maior que 50 --------')
const maisDe50Anos = pessoas.filter( obj => obj.idade > 50);
console.log(maisDe50Anos);

console.log('------ Nome termina com A ---------')
const terminaComA = pessoas.filter( obg => obg.nome.toLowerCase().endsWith('a'));
console.log(terminaComA);




