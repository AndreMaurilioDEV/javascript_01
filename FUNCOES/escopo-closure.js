    //let x = 50;
function fora(){ // escopo léxico da função
    let x = 100; // definicao de x no escopo
   function somar10(){ 
    return x + 10;
   }

   return somar10;
}

module.exports = fora();


