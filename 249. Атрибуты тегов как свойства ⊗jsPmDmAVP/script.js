"use strict"; //строгий режим

// N1

let elem1 = document.querySelector('#elem1');


let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
	alert(elem1.type);
});

// N2

let elem2 = document.querySelector('#elem2');
let button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
	elem2.type = 'submit';
});

// N3
let link1 = document.querySelector('#link1');
let button3 = document.querySelector('#button3');
let link_name = document.querySelector('#link_name');
button3.addEventListener('click', function() {
	link_name.textContent = link1.href;
});

// N4
let link2 = document.querySelector('#link2');
let button4 = document.querySelector('#button4');
button4.addEventListener('click', function() {
	link2.textContent += ' ('+link1.href+')';
});

// N5
let img5 = document.querySelector('#img5');
let button5 = document.querySelector('#button5');
let source = document.querySelector('#source');
button5.addEventListener('click', function() {
	source.textContent = img5.src;
});

//N6
let img6 = document.querySelector('#img6');
let button6 = document.querySelector('#button6');
button6.addEventListener('click', function() {
	img6.width = 300;
});

// N7
let img7 = document.querySelector('#img7');
let button7 = document.querySelector('#button7');
button7.addEventListener('click', function() {
	img7.width *= 2;
});

// N8
let img8 = document.querySelector('#img8');
let button8 = document.querySelector('#button8');
let img9 = document.querySelector('#img9');
let button9 = document.querySelector('#button9');
button8.addEventListener('click', function() {
	img8.src = img9.src;
});
button9.addEventListener('click', function() {
	img9.src = img8.src;
});