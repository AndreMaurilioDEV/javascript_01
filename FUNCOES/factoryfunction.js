function criaPessoa(nome , sobrenome, altura, peso){
    return { // retorna o objeto
        
        nome , 
        sobrenome,

        // getter
        get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
        },


        // setter - para setar um novo nome completo, invés do que já tem
        set nomeCompleto(valor){ // valor será o novo nome completo
        valor = valor.split(' '); // divide o nome a partir de cada espaço e retorna em array com cada índice
        // índice 0 - Maria
        // índice 1 - Luiza
        // índice 2 - Oliveira

        this.nome = valor.shift(); // retorna o nome(Maria) para a variavel e remove da array(shift);
        this.sobrenome = valor.join(' '); // pega o resto da array(Luiza Oliveira) e junta(join) com nome a partir de ' ';
        
        },


        fala(assunto){
        return `${this.nome} está ${assunto}.` // concatenação - Template String]
        // o this é quem chama, exemplo: p1.nome - p1 = this
        },


        altura: altura,
        peso: peso,
        /*imc(){
            const indice = this.peso / (this.altura ** 2);
            return 'IMC: ' + indice.toFixed(2);
        },*/


        // GETTER
        get imc(){ // imc finge que é um atributo da classe invés de ser função
            const indice = this.peso / (this.altura ** 2);
            return 'IMC: ' + indice.toFixed(2);
        }
    };
}

// Consegue criar três pessoas rapidamente a partir de uma factory function
// é so mudar os objetos das pessoas(nome,sobrenome,altura,peso);

const p1 = criaPessoa('André', 'Maurilio', 1.78, 75);
const p2 = criaPessoa('Maria','Andrade', 1.65, 62);
const p3 = criaPessoa('Silva', 'Oliveira', 1.85, 95);

console.log(p1.nomeCompleto); // acessa o metódo sem () - getter ; 
console.log(p2.nomeCompleto);
console.log(p3.nomeCompleto);

console.log('------------------')
console.log(p1.imc); // acessa o metódo sem () - getter ;
console.log(p2.imc);
console.log(p3.imc); 


console.log('');
console.log('------ Mudando com setter --------');
p1.nomeCompleto = 'Maria Luiza Oliveira'; // seta novo nome completo pra p1
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
