"use strict"; //строгий режим

// N1
let elem1 = document.querySelector('#elem1');
elem1.firstElementChild.classList.add('colored');

// N2
let elem2 = document.querySelector('#elem2');

elem2.lastElementChild.classList.add('colored');

// N3
let elem3 = document.querySelector('#elem3');
 let elem3_childs = elem3.children;

 for(let elem of elem3_childs) {
    elem.textContent += '!';
 }

// N4
let elem4 = document.querySelector('#elem4');
elem4.parentElement.classList.add('parent_border');

// N5
let elem5 = document.querySelector('#elem5');
elem5.closest('div');
console.log(elem5.closest('div'));

// N6
let elem6 = document.querySelector('#elem6');
elem6.closest('.www');
console.log(elem6.closest('.www'));

// N7
let elem7 = document.querySelector('#elem7');
elem7.previousElementSibling.textContent += '!';

// N8
let elem8 = document.querySelector('#elem8');
elem8.nextElementSibling.textContent += '!';

// N9
let elem9 = document.querySelector('#elem9');
elem9.nextElementSibling.nextElementSibling.textContent += '!';

// N10
let elem10 = document.querySelector('#elem10');
let elem10_prev = elem10.previousElementSibling.textContent;
let elem10_next = elem10.nextElementSibling.textContent;
elem10.nextElementSibling.textContent = elem10_prev;
elem10.previousElementSibling.textContent = elem10_next;