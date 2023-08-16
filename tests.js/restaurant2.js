const createMenu = (obj) => {
    let outroObjeto;
    let array = [];
   // let comsumption
   return  outroObjeto = {
        fecthMenu() {
          return obj 
        },
        comsumption: array,
        order(...strings) {


                for (const string of strings) {
                    if (string in objetoRetornadoCreateMenu.fecthMenu().drinks || string in objetoRetornadoCreateMenu.fecthMenu().food) {
                        array.push(string);
                    } else {
                        return 'Item indisponível';
                    }
                }

                return array;
            }, pay() {

                    let somaPrecos;
                    const coxinhas = array.filter( qtd  => qtd.includes('coxinha'));
                    const sanduiche = array.filter( qtd  => qtd.includes('sanduiche'));
                    const cerveja = array.filter( qtd  => qtd.includes('cerveja'));
                    const agua = array.filter( qtd  => qtd.includes('agua'));
                     somaPrecos =  coxinhas.length * objetoRetornadoCreateMenu.fecthMenu().food.coxinha + cerveja.length * objetoRetornadoCreateMenu.fecthMenu().drinks.cerveja + agua.length * objetoRetornadoCreateMenu.fecthMenu().drinks.agua + sanduiche.length * objetoRetornadoCreateMenu.fecthMenu().food.sanduiche;

                     return Number(((somaPrecos)/10 + somaPrecos).toFixed(2));
            }


};

};

const objetoRetornadoCreateMenu = createMenu(
    {food: {coxinha: 3.90, sanduiche: 9.90},
    drinks: {agua: 3.90, cerveja: 6.90}});


    const teste =  createMenu(
        {food: {coxinha: 3.90, sanduiche: 9.90},
        drinks: {agua: 3.90, cerveja: 6.90}});


    console.log(teste.order('coxinha','coxinha'))
    console.log(teste.pay());
    console.log(outroObjeto);