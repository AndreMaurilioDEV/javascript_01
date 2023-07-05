function palindromo (palavra){

let splitPalavra = palavra.split('')
let reversePalavra = splitPalavra.reverse();
let joinPalavra = reversePalavra.join('');


if(joinPalavra.toLowerCase() === palavra.toLowerCase()){
    console.log('É palindromo');
}else{
    console.log('Não é palindromo');
}

}
palindromo('arara');