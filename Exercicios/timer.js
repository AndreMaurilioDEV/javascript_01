
function relogio(){
    function getTime(segundos){ // cria data a partir de segundos
        const data = new Date(segundos * 1000);  // conversao de segundos para ms
        return data.toLocaleTimeString('pt-br',{
        timeZone: 'GMT' // gmt zera o time zone para 00:00:00. padrao: 21:00:00
        });
        }
        
        const relogio = document.querySelector('.relogio');
        const iniciar = document.querySelector('.iniciar');
        const pausar = document.querySelector('.pausar');
        const zerar = document.querySelector('.zerar');
        let segundos = 0;
        let timer;
        
        /*ADICIONA OS CLICKS SEM ADDEVENTLISTENER*/ 
        
        document.addEventListener('click',function(e){
        const elemento = e.target; // registra o elemento clicado com o target
        
        
        if(elemento.classList.contains('iniciar')){ // se o elemento clicado tiver a classe iniciar, irá fazer :
        relogio.classList.remove('pausado')
        clearInterval(timer); // limpa o timer antes de iniciar o relógio para nao ficar acrescentando segundos ao iniciarRelogio();
        iniciarRelogio();
         };
        
        if(elemento.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        segundos = 0; // ao zerar e iniciar novamente irá começar do 0 invés de onde parou
        }
        
        if(elemento.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado')
        }
        
        });
        
        
        /*iniciar.addEventListener('click', function(event){
        relogio.classList.remove('pausado')
        clearInterval(timer); // limpa o timer antes de iniciar o relógio para nao ficar acrescentando segundos ao iniciarRelogio();
        iniciarRelogio();
        });
        
        
        pausar.addEventListener('click', function(event){
        clearInterval(timer);
        relogio.classList.add('pausado')
        });
        
        
        zerar.addEventListener('click', function(event){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        segundos = 0; // ao zerar e iniciar novamente irá começar do 0 invés de onde parou
        });*/
        
        
        
        function iniciarRelogio(){
        timer = setInterval(function(){ // fora pra dentro da pra manusear a let
        segundos++; // incrementa 1 segundo a cada 1 segundo do setInterval
        relogio.innerHTML = getTime(segundos); //retorna em horas/minutos/segundos com toLocaleTimeString do getTime(); 
        }, 1000);
            
        
        }
}

relogio();




