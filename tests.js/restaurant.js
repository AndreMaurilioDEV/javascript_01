const createMenu = (menuData) => {
    let orders = [];

    const fetchMenu = () => menuData;

    const order = (menu, ...strings) => {
        const menuItems = fetchMenu();

        for (const string of strings) {
            if (string in menuItems.drinks || string in menuItems.food) {
                orders.push(string);
            } else {
                return 'Item indisponível';
            }
        }

        return orders;
    };

    const pay = () => {
        const menuItems = fetchMenu();

        const coxinhas = orders.filter(qtd => qtd.includes('coxinha'));
        const sanduiche = orders.filter(qtd => qtd.includes('sanduiche'));
        const cerveja = orders.filter(qtd => qtd.includes('cerveja'));
        const agua = orders.filter(qtd => qtd.includes('agua'));

        const total =
            coxinhas.length * menuItems.food.coxinha +
            cerveja.length * menuItems.drinks.cerveja +
            agua.length * menuItems.drinks.agua +
            sanduiche.length * menuItems.food.sanduiche;

        return Number(((total) / 10 + total).toFixed(2));
    };

    const menu = [{
        fetchMenu,
        consumption: orders,
        order: (...strings) => order(menu, ...strings),
        pay
    }];
    return menu;
};

const menuData = {
    food: { coxinha: 3.90, sanduiche: 9.90 },
    drinks: { agua: 3.90, cerveja: 6.90 }
};

const menu = createMenu(menuData);
console.log(menu[0].order('coxinha','sanduiche'));
console.log(menu[0].consumption);








