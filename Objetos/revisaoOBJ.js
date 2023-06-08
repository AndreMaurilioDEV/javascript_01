// Forma literal:
const pessoa = { 
    nome: 'Luiz', 
    sobrenome: 'Otávio',
    idade: 22,

    getDataNascimento(){
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    }
};

console.log(pessoa.getDataNascimento());

// Forma construtor:
// const pessoa = new Object();
// pessoa.nome = 'Luiz';
// pessoa.sobrenome = 'Otávio';

delete pessoa.nome; // deleta chave

// Acesso de chave:
// anotação de ponto - mais simples
console.log(pessoa.sobrenome);

// Com colchete 
const chave = 'sobrenome';
console.log(pessoa[chave]);
console.log(pessoa['sobrenome']);

// FACTORY FUNCTION

function criaCarro(modelo, ano, cor){
    return{
        modelo: modelo,
        ano: ano, 
        cor,

        get carro(){
            return 'Modelo: ' + modelo + ' || Ano: ' + ano + ' || Cor: ' + cor;
        }
    }
}

const carro1 = criaCarro('Celta', 2011, 'Vermelho');
console.log(carro1.carro);


// CONTRUCTOR FUNCTION

function Pessoa(nome, sobrenome){

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = () => {
        return this.nome + ' ' +  this.sobrenome;
        
    }

    Object.freeze(this); // NENHUM objeto dessa função pode ser alterado mais 
   
}


    const p1 = new Pessoa('André', 'Maurilio');
    delete p1.nome; // não altera por causa do freeze
    const p2 = new Pessoa('Maria','Valente');
    console.log(p1.nomeCompleto());
    console.log(p2.nomeCompleto());
