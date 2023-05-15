const paragrafo = document.querySelector('.paragrafos')

const ps = paragrafo.querySelectorAll('p'); // pega cada um elemento p da div paragrafo
// NodeList(4) [p,p,p,p]

const estilosBody = getComputedStyle(document.body); // pega o css do body
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);


for(let p of ps){
    p.style.backgroundColor = backgroundColorBody; // acesso do background do css pelo JS
    p.style.color = 'white';
}