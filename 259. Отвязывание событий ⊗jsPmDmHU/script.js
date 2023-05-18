"use strict"; //строгий режим

// N1
let link1 = document.querySelector('#link1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', addHref);
function addHref() {
    link1.textContent += ' ' + link1.href;
    this.removeEventListener('click', addHref);
}

// N2
let button2 = document.querySelector('#button2');

button2.addEventListener('click',   inc10Times);


function inc10Times() {
    this.textContent++; 
    if( this.textContent >= 10) {
            button2.removeEventListener('click', inc10Times)
    } 
}

