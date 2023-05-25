
// IIFE -   protege do escopo global

(function(idade, peso, altura){ // parâmetros
    let sobrenome = 'Maurilio'
    function criaNome(nome){
        return nome + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('André '));
    }

    falaNome();
    console.log(idade, peso, altura);

})(30,90,1.80); // argumentos