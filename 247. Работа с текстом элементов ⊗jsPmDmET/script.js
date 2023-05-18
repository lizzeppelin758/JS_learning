"use strict"; //строгий режим

// N1

let text1 = document.querySelector('#text1');


let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
	console.log(text1.textContent);
});

// N2

let text2 = document.querySelector('#text2');
let button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
	text2.textContent = 'new text';
});

// N3
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

let button3 = document.querySelector('#button3');

button3.addEventListener('click', function() {
	alert(Number(number1.textContent) + Number(number2.textContent));
});

// N4
let button4 = document.querySelector('#button4');
let number4 = document.querySelector('#number4');
let number5 = document.querySelector('#number5');
let sum = document.querySelector('#sum');

button4.addEventListener('click', function() {
	sum.textContent = Number(number4.textContent) + Number(number5.textContent);
});

// N5
let button5 = document.querySelector('#button5');
let number6 = document.querySelector('#number6');
button5.addEventListener('click', function() {
	number6.textContent++;
});

// N6
let button6 = document.querySelector('#button6');
let text6 = document.querySelector('#text6');
button6.addEventListener('click', function() {
	text6.textContent += '!';
});


