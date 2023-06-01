// Pausa o código em determinado local

// primeira vez q a funcao geradora for chamada, retorna primeiro yield
// segunda vez q a funcao geradora for chamada, retorna segundo yield
// .....

function* geradora1(){
    //código qualquer
    yield 'Valor 1'; // é como se fosse um return

     //código qualquer
    yield 'Valor 2';

      //código qualquer
    yield 'Valor 3'; 


}

const g1 = geradora1();
 // usa-se o next para exibir a funcao e value entrega os yield
 //console.log(g1.next().value); // valor 1
 //console.log(g1.next().value); // valor 2
 //console.log(g1.next().value); // valor 3 
console.log('------------')
for(let valor of g1){
    console.log(valor);
}

console.log('--------')




function* geradora3(){
 yield 0;
 yield 1;
 yield 2;
}
function* geradora4(){ 
yield* geradora3();  // pega parte do serviço da geradora3 para esse gerador; (0,1,2)
yield 3;
yield 4;
yield 5;
}
const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}




console.log('-----------');
// suponha um sistema com etapas, cada função com uma tarefa;
function* geradora5(){
    yield function(){
        console.log('Vim do yield 1')
    };

    return function(){ // o return vai parar a sequência do yield
        console.log('Vim do return');
    }

    yield function(){
        console.log('Vim do yield 2')
    };
}

const g5 = geradora5();
const func1 = g5.next().value; // funcao do yield 1 para const
const func2 = g5.next().value; // funcao do yield 2 para const
func1();
func2();