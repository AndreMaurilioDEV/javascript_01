function soma(a,b){
    return a + b;
}

console.log(soma(5,20));


// return objeto
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const pessoa01 = criaPessoa('André', 'Maurilio');
console.log(pessoa01);


function criaMultiplicador(multiplicador){ 
    // criaMultiplicador retorna uma function, e essa function retorna n * multiplicador
    return function(n){
        return n * multiplicador;
    }
};

//  criarMultiplicador(multiplicador)
const duplica = criaMultiplicador(2); // duplica = multiplicador === 2;
const triplica = criaMultiplicador(3); // duplica = multiplicador === 3;
const quadruplica = criaMultiplicador(4); // quadruplica = multiplicador === 4;




console.log(duplica(2)); // duplica = 2(n) * 2(multiplicador)
console.log(triplica(3)); // triplica = 3(n) * 3(multiplicador)
console.log(quadruplica(12)); // quadruplica = 12(n) * 4(multiplicador)