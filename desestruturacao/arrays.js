
// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (ARRAY)


const numeros = [1000,2000,3000,4000,5000,6000,7000,8000]
//const[primeiroNumero, segundoNumero, ... resto] = numeros; // operator resto de const numeros
//console.log(primeiroNumero, segundoNumero);
//console.log(resto);



 //                  0          1        2   
 //                0,1,2     0,1,2     0,1,2
const numeros1 = [[1,2,3] , [4,5,6] , [7,8,9]];
const [lista1, lista2, lista3] = numeros1;
console.log(lista3[2]); // acessa o [2][2];