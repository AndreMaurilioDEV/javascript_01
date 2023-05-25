// set interval simulando tirando a ordem das funcoes, a partir de diferentes segundos, nesse caso.
// para as funções voltarem a ordem é preciso do callback
function rand(min = 1000, max = 3000 ){
    const msRandom = Math.random() * (max - min) + min; 
    return Math.floor(msRandom);
}

function f1(callback){ // função callback 
setTimeout(function(){
console.log('f1')
if(callback) callback(); //se tiver callback irá executar algo dps de executar o f1, por exemplo.
}, rand());


}

function f2(callback){
setTimeout(function(){
console.log('f2');
if(callback) callback();
}, rand());
}


function f3(callback){
setTimeout(function(){
console.log('f3');
if(callback) callback();
}, rand());
}

// ORDEM DAS FUNÇÕES CRIADA
// é preciso que a f2 seja executada logo depois da f1, então f1 vai receber um funcao callback anonima com f2();
// essa function anonima vai ser chamada com callback para f1(callback);
// f2 executado e chamando callback pra executar f3 em seguida.

/*
f1(function(){  // f1 recebendo funcao callback anonima para executar f2
f2(function(){  // f2 recebendo funcao callback anonima para executar f3
f3(function(){  // f3 recebendo funcao callback anonima para executar console.log
 console.log('Olá Mundo');
  })
    });
        }); */


 // OU: 
 
 const f1callback = () => f2(f2callback);
 const f2callback = () => f3(f3callback);
 const f3callback = () => console.log('Olá Mundo!!');
 f1(f1callback);

 

