(function(){
    const elementos = [
        {tag: 'p' , texto: 'Frase 1'},
        {tag: 'div' , texto: 'Frase 2'},
        {tag: 'footer' , texto: 'Frase 3'},
        {tag: 'section' , texto: 'Frase 4'},
    ];
    
    
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    
    
    for(let i = 0; i < elementos.length; i++){
        let { tag , texto } = elementos[i]; // desestruturação
        let tagCriada = document.createElement(tag); // tag(elementos) armazenada em tagCriada
        tagCriada.innerHTML = texto; // tagCriada vai receber o valor de texto(elementos)
        div.appendChild(tagCriada); // div vai ser pai de tagCriada
    }
    
    container.appendChild(div); // container pai da div
})();
