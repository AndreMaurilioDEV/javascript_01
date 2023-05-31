// construtora - inicia-se com letra maiúscula e new
// seu escopo é o objeto
// não usa virgulas no escopo
// cria-se metodos
// EX: Pessoa (new)

function Pessoa(nome, sobrenome){

    //PRIVADA
    const metodoInterno = () => { // acessado apenas internamente - const ou let

    };

    // ATRIBUTOS E METODOS PUBLICOS
    this.nome = nome; // chave do objeto
    // seria Pessoa.nome
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log( this.nome + ': Sou um método');
    }
}

const p1 = new Pessoa('Luiz','Otavio');
const p2 = new Pessoa('André','Maurilio');
console.log(p1);
p1.metodo();
p2.metodo();

