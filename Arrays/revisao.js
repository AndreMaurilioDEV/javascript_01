const nomes = ['André','João','Eduarda'];
nomes[2] = 'Maria'; // altera o índice 2
//delete nomes[2]; // remove elemento e nao altera índice

// rest - [0,1,2...];
// spread operator - [...0,1,2];

const novoReferencia = nomes; // novoReferencia === [nomes], passado por referência

const novo = [...nomes]; // spread operator - espalha e pega os elementos dentro de outro array sem alterar o array original
novo.pop(); 

console.log(novoReferencia + '     Valor por referência');
console.log(nomes + '     Array original');
console.log(novo + '      Array copiado e modificado');

console.log('-----------------');

// ---------- REMOÇÃO ARRAY ------------
// POP - remove o último elemento e altera a array
const n = [1,2,3,4,5];
console.log('ORIGINAL: ' + n);
const elRemovido = n.pop(); // remove último elemento e retorna elemento removido na const
console.log('Modificado: ' + n + ' ----- Removido: ' +elRemovido);


console.log('--------------');
// SHIFT - remove primeiro elemento e altera array

const n1 = [1,2,3,4,5];
console.log('ORIGINAL:  ' + n1);
const elRemovido01 = n1.shift(); // remove primeiro elemento e retorna elemento removido na const
console.log('Modificado: ' + n1 + ' ----- Removido: ' +elRemovido01);


console.log('--------------');
// ---------- ADIÇÃO ARRAY ------------

// UNSHIFT
const arr = ['item01', 'item02', 'item03'];
console.log('ORIGINAL:  ' + arr);
arr.unshift('itemAdicionadoComeço'); // adiciona no começo da array
console.log(arr);


// PUSH - ! MAIS UTILIZADO !
arr.push('itemAdicionaFinal'); // adiciona no fim da array
console.log(arr);


console.log('--------');

// POR POSIÇÃO 

console.log('---- SLICE -----')
const nomesSlice = ['Andre','Maria','Andrade',1,2,3,4,5];
console.log('ORIGINAL:  ' + nomesSlice);
const novos = nomesSlice.slice(2,- 4); // pega e atribui na const os índices a partir de 2 ate 4(2 e 3);
const novos1 = nomesSlice.slice(0, -1); // pega a partir do índice 0 e remove o último elemento(-1);
const novos2 = nomesSlice.slice(1, -1);  // pega a partir do índice 1 e remove o último elemento(-1) - remove as duas pontas;
const novos3 = nomesSlice.slice(1, -2);  // pega a partir do índice 1 e remove o dois últimos elemento(-2) 


console.log(novos);
console.log(novos1);
console.log(novos2);
console.log(novos3);

console.log('---- SPLICE -----')


console.log('----- STRING PARA ARRAY ------');
const nome = 'André Mauriio de Andrade Oliveira' ; // string
const nomeSplit = nome.split(' '); // separa a string em um array a partir de espaço
console.log(nomeSplit); // array
console.log('Sobrenome: ' + nomeSplit[1]);

console.log('---- ARRAY PARA STRING ------');
const paraString = nomeSplit.join(' '); // une e separa por espaço novamente a array nomeSplit;
console.log(paraString);


