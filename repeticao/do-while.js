function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;


let rand = random(min, max);

while(rand !== 10){ // verifica primeiro. Enquanto o rand nao for 10 o laço será executado;
rand = random(min, max);
console.log(rand);
}

console.log("-----------------------");

//// faça - enquanto

do{ // executa primeiro. verifica depois.
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);