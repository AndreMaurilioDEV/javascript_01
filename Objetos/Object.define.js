// defineProperty(1) ou defineProperties(várias); - CONFIGURA AS CHAVES DETALHADAMENTE
// defineProperty(objeto, propriedade, {configuracoes})
// defineProperties(objeto, {configuracoes geral})

function Produto(nome, preco, estoque){ 
    //this.nome = nome // público
    //this.preco = preco // público
   
    Object.defineProperty(this, 'estoque', { // objeto this, propriedade estoque, {configuracoes};
        enumerable: true, // mostra a chave no objeto e no laço for in
        value: estoque, // valor da key estoque é o parâmetro estoque recebido na const produto1
        //value: function(){  // value pode ser uma função
          //  return estoque; 
        //}
        writable: false, // o valor da propriedade não pode ser alterado
        configurable: false // não permite apagar ou reconfigurar a variavel
        //se o configurable antes fosse true, poderia duplicar o objeto
    });

    Object.defineProperties(this, {
        nome: { // propriedade: {configuracao da propriedade}
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });

    
    
}

const produto1 = new Produto('Camiseta', 20 , 3);
produto1.estoque = 500; // não altera - writable: false;
delete produto1.estoque; // não apaga - configurable: false;
// console.log(produto1.estoque());  console de value como function 
console.log(produto1);