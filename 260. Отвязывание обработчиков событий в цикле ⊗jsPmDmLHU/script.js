"use strict"; //строгий режим

// N1
let pars = document.querySelectorAll('.par');
for(let par of pars) {
    par.addEventListener('click', addUpAtTheEnd);
}

function addUpAtTheEnd() {
    this.textContent += '!';
    this.removeEventListener('click',addUpAtTheEnd);
}


