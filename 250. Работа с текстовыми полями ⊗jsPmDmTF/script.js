"use strict"; //строгий режим

// N1

let elem1 = document.querySelector('#elem1');


let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
	elem1.value = 'new text';
});

// N2

let elem2 = document.querySelector('#elem2');
let button2 = document.querySelector('#button2');
let paragraph = document.querySelector('#paragraph2');
button2.addEventListener('click', function() {
	paragraph.textContent = elem2.value;
});

// N3
let elem3_1 = document.querySelector('#elem3_1');
let elem3_2 = document.querySelector('#elem3_2');
let button3 = document.querySelector('#button3');
button3.addEventListener('click', function() {
	elem3_2.value = elem3_1.value**2;
});

// N4
let elem4_1 = document.querySelector('#elem4_1');
let elem4_2 = document.querySelector('#elem4_2');
let button4 = document.querySelector('#button4');
button4.addEventListener('click', function() {
	let value1 = elem4_1.value;
	let value2 = elem4_2.value;
	elem4_2.value = value1;
	elem4_1.value = value2;
});

// N5
let elem5_1 = document.querySelector('#elem5_1');
let elem5_2 = document.querySelector('#elem5_2');
let elem5_3 = document.querySelector('#elem5_3');
let elem5_4 = document.querySelector('#elem5_4');
let elem5_5 = document.querySelector('#elem5_5');
let result = document.querySelector('#result');
let button5 = document.querySelector('#button5');
button5.addEventListener('click', function() {
	result.textContent = (Number(elem5_1.value) + Number(elem5_2.value) + Number(elem5_3.value) + Number(elem5_4.value) + Number(elem5_5.value))/5;
});

