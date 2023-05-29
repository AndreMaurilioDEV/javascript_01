const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');
const apagar = document.querySelector('.apagar');
const relogio = document.querySelector('.relogio');




inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        criaTarefa(inputTarefa.value);
    }
});

function criaLI(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoinput){
    const li = criaLI();
    li.innerHTML = textoinput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
  
}

function limpaInput(){
   inputTarefa.value = '';
   inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += '                     ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
   
}





function salvarTarefas(){

    const liTarefas = tarefas.querySelectorAll('li'); // pega todos os li da ul(tarefas)
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){ // passa pelos textos de li(tarefa value + apagar)
    let tarefaTexto = tarefa.innerText; // armazena texto da li na let 
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    tarefaTexto = tarefaTexto.replace('Feito', '').trim();
     // 
    //substitui a palavra Apagar da li para ''; trim() remove espaços do apagar;
    listaDeTarefas.push(tarefaTexto); // conteudo da li na array


    const tarefasJSON = JSON.stringify(listaDeTarefas); // foi criada uma string do array convertido para JSON para ser salvo no navegador
    localStorage.setItem('tarefas', tarefasJSON); // salva tarefasJSON em tarefas no navegador(apenas string) 
    // key = tarefas - value = tarefasJSON na aba application do console


    }
}

function adicionarTarefasSalvas(){ // lê as tarefas salvas no storage

    const tarefas = localStorage.getItem('tarefas'); // obtém o valor texto da key tarefas do storage para const
    const listaDeTarefas = JSON.parse(tarefas); // tarefas de string para array, novamente

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);// cria tarefa com os valores salvos do storage
    }
}

adicionarTarefasSalvas();



btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    
});

document.addEventListener('click', function(e){
    const elemento = e.target;

    if(elemento.classList.contains('apagar')){
       elemento.parentElement.remove(); // remove o elemento pai(li) da classe filha(apagar - button);
       salvarTarefas(); // Apaga as tarefas salvas do storage 
    }

    if(elemento.nodeName === 'LI'){
        toggle(elemento);
    }

});

function toggle(li){
    li.classList.toggle('feito');
}


let segundos = 0;
function getTime(segundos){
    const data = new Date;
    return data.toLocaleDateString('pt-br');
    }
    
function mostrarData(){
    relogio.innerHTML = getTime(segundos);
}
mostrarData();











