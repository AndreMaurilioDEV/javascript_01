    

    let nomes = ['André','Maria','Cadu','Rods','Luiza','Marilia'];
    let frutas = ['Mamão', 'banana', 'laranja', 'acerola','Jaca','Uva','Maçã'];
    let marcas = ['Samsung','Apple','Google', 'Nokia', 'Motorola', 'LG'];

    function getLongestWord(arrayNomes){
       
        let array = [];
        let indicesNomes;
    
        for(let i = 0; i < arrayNomes.length; i++){
        indicesNomes = arrayNomes[i].split('');
        quantidadeCaracteres = indicesNomes.length;
        array.push(quantidadeCaracteres);
        }
    
        let maiorN = Math.max(...array);
        let indiceMaior = array.indexOf(maiorN);
        return arrayNomes[indiceMaior];
    }

    const iniciaFunction = getLongestWord(nomes);
    console.log(iniciaFunction);
   

    

    
   
   

    

   
    
   
   
    
   
       
        
    
   