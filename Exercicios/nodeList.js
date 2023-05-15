const paragrafo = document.querySelector('.paragrafos')

const ps = paragrafo.querySelectorAll('p'); // pega cada um elemento p da div paragrafo
// NodeList(4) [p,p,p,p]

const estilosBody = getComputedStyle(document.body); // pega o css do body e armazena em estilosBody
const backgroundColorBody = estilosBody.backgroundColor; // armazena o backgroundcolor do body em backgroundColorBody

for(let p of ps){ // valor de cada elemento p 
    p.style.backgroundColor = backgroundColorBody; // acesso do background do css pelo JS
    p.style.color = 'white';
}