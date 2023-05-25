const somar10 = require('./escopo-closure');

let x = 200; 
console.log(somar10()); // essa closure lembra do seu escopo onde o x foi definido(funcao fora())
// até mesmo se for executada longe do seu escopo