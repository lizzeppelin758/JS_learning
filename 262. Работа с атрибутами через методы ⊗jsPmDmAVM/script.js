"use strict"; //строгий режим

// N1
let elem1 = document.querySelector('#elem1');
let value1 = elem1.getAttribute('value');
console.log(value1);

// N2
let elem2 = document.querySelector('#elem2');
let class2 = elem2.getAttribute('class');
console.log(elem2.className);
console.log(elem2.getAttribute('class'));
console.log(class2);

// N3
let elem3 = document.querySelector('#elem3');
elem3.setAttribute('value','text');
console.log(elem3.getAttribute('value'));

// N4
let elem4 = document.querySelector('#elem4');
elem4.setAttribute('className','valid');
console.log(elem4.getAttribute('className'));

// N5
let elem5 = document.querySelector('#elem5');
elem5.removeAttribute('value');
console.log(elem5.getAttribute('value'));

// N6
let elem6 = document.querySelector('#elem6');
console.log(elem6.hasAttribute('value'));




