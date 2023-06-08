// REDUCE - reduz o array
// reduce(acumulador,valor, indice, array)
const numeros = [5,50,80,66,2,11,35,10,7];

const total = numeros.reduce(function(acumulador, valor){
acumulador += valor;
return acumulador; // para ter um acumulador a cada iteração do laço é preciso retornar ele 

}, 0 ); // acumulador = 0; se não definir isso, o primeiro valor do acumulador será o primeiro elemento do array

console.log(total);

// retorne a pessoa mais velha

const pessoas = [
    {nome: 'Luiz', idade: 60},
    {nome: 'Maria', idade: 50},
    {nome: 'Eduardo', idade: 42},
    {nome: 'Natalia', idade: 31},
    {nome: 'Rosa', idade: 18},
    {nome: 'André', idade: 5},
    {nome: 'Andrade', idade: 75}
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}); // o acumulador vai ser a primeira linha e vai fazer a verificação passando pelo valor da idade de cada objeto: 

console.log(maisVelha);

//   acumulador.idade           valor.idade
//  {nome: 'Luiz', idade: 60} > idade: 50[1] ? = true, return acumulador
//  {nome: 'Luiz', idade: 60} > idade: 42[2] ? = true, return acumulador
//  {nome: 'Luiz', idade: 60} > idade: 31[3] ? = true, return acumulador
//  {nome: 'Luiz', idade: 60} > idade: 18[4] ? = true, return acumulador
//  {nome: 'Luiz', idade: 60} > idade: 5[5] ? =  true, return acumulador
//  {nome: 'Luiz', idade: 60} > idade: 75[6] ? =  false, return valor
