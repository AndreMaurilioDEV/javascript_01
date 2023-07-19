let paletas = document.querySelectorAll('.color');
const clear = document.querySelector('#clear-board');
const btnRandomColor = document.querySelector("#button-random-color");
const pixelBoard = document.querySelector('#pixel-board');
const input = document.querySelector('#board-size');
const buttonVQV = document.querySelector('#generate-board');
let valueInput;
let pixels;
let color;


for (let i = 0; i < 25; i++) {
    let pixelsGenerate = document.createElement('div');
    pixelBoard.appendChild(pixelsGenerate);
    pixelsGenerate.className = 'pixel';
    pixels = document.querySelectorAll('.pixel');
}


buttonVQV.addEventListener('click', () => {
    valueInput = input.value * input.value;
    for (let i = 0; i < pixels.length; i++) {
        let pixel = valueInput+'px'
        pixels[i].style.width = pixel;
        pixels[i].style.height = pixel;
        pixels[i].style.backgroundColor = 'white'
    }
    if(!valueInput){
        alert('Board inválido!')
    }
});




function getColor() {
    for (let i = 0; i < paletas.length; i++) {

        paletas[i].addEventListener('click', function (event) {
            const selected = document.querySelector('.selected')
            if (selected) {
                selected.classList.remove('selected');
            }
            event.target.classList.add('selected')
            let style = getComputedStyle(paletas[i]);
            color = style.backgroundColor;
        })
    }

};

function fillPalett() {

    for (let i = 0; i < paletas.length; i++) {

        btnRandomColor.addEventListener('click', function () {
            let corRandom = Math.floor(Math.random() * 16777215).toString(16);
            let hexa = '#' + corRandom;
            paletas[i].style.backgroundColor = hexa;
        })
    }
}

function fillPixel() {

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', function () {
            pixels[i].style.backgroundColor = color;
            itemSet = localStorage.setItem(`pixelBoard${i}`, color);
        })
    }
}

function clearPixels() {
    for (let i = 0; i < pixels.length; i++) {
        clear.addEventListener('click', function () {
            pixels[i].style.backgroundColor = 'white';
        })
    }

}

function addSavedColor() {
    for (let i = 0; i < pixels.length; i++) {
        const getItem = localStorage.getItem(`pixelBoard${i}`);
        pixels[i].style.backgroundColor = getItem;
    }
}
getColor();
fillPixel();
clearPixels();
fillPalett();
addSavedColor();
//generateBoard();
