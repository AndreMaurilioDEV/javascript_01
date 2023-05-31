function Calculadora(){

    // this.metodo = () => {} - metodo da constructor = function da factory;
    // this.atributo = atributo - atributo da constructor = atributo da factory(atributo: );

     this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaClique()
        this.enter()
    };

    this.enter = () =>{
        this.display.addEventListener('keypress', (e) =>{
            if(e.keyCode === 13) return this.realizaConta();
        });
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus();
    };

    this.limpaDisplay = () => this.display.value = ' ';
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        let conta = this.display.value;
        try{
            conta = eval(conta);
            if(!conta){
                alert("Conta inválida");
                return;
            }
            this.display.value = conta;
        }catch(e){
            alert('Conta inválida');
            return;
        }
    };

    this.capturaClique = () => {
        document.addEventListener('click', e =>{
            const el = e.target;
            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.limpaDisplay();
            if(el.classList.contains('btn-del')) this.apagaUm(el);
            if(el.classList.contains('btn-eq'))this.realizaConta(el);
        
        });
    };
}

const calculadora = new Calculadora();
calculadora.inicia();