
function FizzBuzz(numero){

if(numero % 3 === 0 && numero % 5 === 0 ) return 'FizzBuzz';
if(numero % 3 === 0) return 'Fizz';
if(numero % 5 === 0) return 'Buzz';
if(typeof numero !== 'number') return numero;
return numero;

}

for(i = 0; i <= 100; i++){
    console.log(i, FizzBuzz(i));
}
           
 
 




