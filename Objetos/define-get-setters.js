//defineProperty - get e setters

function Produto(nome, preco, estoque){  // NA constructor function

    let estoquePrivado = estoque; 

    Object.defineProperty(this, 'estoque', { // com get e set não precisa de value e writable
        enumerable: true, 
        configurable: false,
        get: function(){ // pega o valor e exibe
            return estoquePrivado; 
        },
        
        set: function(valor){
            if(typeof valor!== 'number'){ // protege a variavel estoquePrivado, 
                //não sendo alterada pelo set ate enviar um número
                console.log('Bad Value')
                return;
            }
            estoquePrivado = valor; // set novo valor se passar pela verificação do if
        }
        
    });
}


function criaProduto(nome){ // NA factory function
    return{
        get nome(){
            return nome;
        },

        set nome(valor){
            nome = valor;
        }
    };
}


const p1 = new Produto('Camiseta', 20, 5);
p1.estoque = 'VALOR SETTER'; // valor para set - se for um número, altera de 5 para novo valor do set
console.log(p1.estoque);


console.log('       ');
console.log('-------- Com Factory Function ----------');
const p2 = criaProduto('Calça'); // get obtém Calça
p2.nome = 'Bermuda'; // novo valor setado, nome = valor (nome = Bermuda);
console.log(p2.nome);