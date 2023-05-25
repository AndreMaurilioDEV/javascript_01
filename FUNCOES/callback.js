// função callback é uma excelente alternativa para controlar o fluxo de processamento assíncrono 
// assíncrono, pois a linguagem não espera o término de cada evento para a execução do próximo.
// função callback só é executada após o processamento de outra função

function primeiroBloco(){
	// Aguardar 5 segundos
    setTimeout( function(){
    console.log('Esse é o primeiro bloco de comandos após 5 segundos');
    }, 5000 );
}
function segundoBloco(){
	console.log('Esse é o segundo bloco de comandos');
}
primeiroBloco();
segundoBloco();

console.log('-----------------------------------------------------------')

// mensagens foram exibidas fora da ordem, mesmo sem terminar o tempo de 5segundos do primeirobloco(), o segundobloco() ja foi executado.
// É PRECISO UTILIZAR A FUNÇÃO CALLBACK;


function exibePrimeiraMensagem (mensagem, callback) {
	console.log(mensagem);
	callback();
}
function exibeSegundaMensagem(){
	console.log('Essa é a segunda mensagem do novo exemplo');
} 
exibePrimeiraMensagem ('Essa é a primeira mensagem do novo exemplo', exibeSegundaMensagem);

/*
function inserirNome(callback){ // recebe parâmetro callback
let name = 'André'; 
callback(name); // chama name de volta para inseriNome
}

function meuNome(name){ // função callback - devolve o name pra inserirNome
    console.log('Olá, ' + name);

}

inserirNome(meuNome); */