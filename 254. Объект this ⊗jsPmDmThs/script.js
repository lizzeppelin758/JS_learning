"use strict"; //строгий режим

// N1

let elem = document.querySelector('#elem');
function writeInFocus() {
    this.value = 1;
}
function writeInBlur() {
    this.value = 2;
}
elem.addEventListener('focus', writeInFocus);
elem.addEventListener('blur', writeInBlur);

// N2

let button = document.querySelector('#button');
function incValue() {
    this.textContent++;
}
button.addEventListener('click', incValue);

