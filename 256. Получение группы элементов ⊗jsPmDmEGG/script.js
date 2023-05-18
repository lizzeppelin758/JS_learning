"use strict"; //строгий режим

// N1

let button1 = document.querySelector('#button1');

let par1 = document.querySelectorAll('.par1');
function setText() {
    for( let par of par1) {
        par.textContent = 'text';
    }
}
button1.addEventListener('click', setText);


// N2

let button2 = document.querySelector('#button2');

let par2 = document.querySelectorAll('.par2');

function writeUpAtTheEnd() {
    for( let par of par2) {
        par.textContent += '!';
    }
}
button2.addEventListener('click', writeUpAtTheEnd);

// N3
let button3 = document.querySelector('#button3');
let nums = document.querySelectorAll('.num');
let par3 = document.querySelector('.par3');
function getSum() {
    let sum = 0;
    for( let num of nums) {
        sum += Number(num.value);
    }
    par3.textContent = sum;
}
button3.addEventListener('click', getSum);
