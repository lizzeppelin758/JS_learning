"use strict"; //строгий режим

// N1

let par1 = document.querySelector('#par1');
let par2 = document.querySelector('#par2');
let par3 = document.querySelector('#par3');
let par4 = document.querySelector('#par4');
let par5 = document.querySelector('#par5');
function writeUpAtTheEnd() {
    this.textContent += '!';
}

par1.addEventListener('click', writeUpAtTheEnd);
par2.addEventListener('click', writeUpAtTheEnd);
par3.addEventListener('click', writeUpAtTheEnd);
par4.addEventListener('click', writeUpAtTheEnd);
par5.addEventListener('click', writeUpAtTheEnd);

// N2

let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');
function calcSquare() {
    this.value *= this.value;
}
inp1.addEventListener('blur', calcSquare);
inp2.addEventListener('blur', calcSquare);
inp3.addEventListener('blur', calcSquare);

