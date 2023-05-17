function retornaHora(data){
    if(data && !(data instanceof Date)){ // se a data for enviada e não for uma instância de date
        throw new TypeError('Esperando instância de Date.')
    }

    if(!data){ // se a data nao for enviada, irá gerar uma data 
        data = new Date();
    }

    return data.toLocaleString('pt-BR');
}


const data = new Date('04-24-2001 12:58:15'); // data instaciada de Date
const hora = retornaHora(data);
console.log(hora);
//ERROR: const hora = retornaHora(11); // não foi instaciada

try{
    const data = new Date('04-24-2001 12:58:15'); // data instaciada de Date
    const hora = retornaHora(11);
    console.log(hora);
}catch(e){
    console.log(e); // Esperando instância de Date
}finally{ // sempre aparece no final, ocorrendo um error ou não
    console.log('Tenha uma bom dia!')
}



