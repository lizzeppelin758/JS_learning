"use strict"; //строгий режим

// N1

let elem1 = document.querySelector('#elem1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
	alert(elem1.className);
});


// N2

let elem2 = document.querySelector('#elem2');
let button2 = document.querySelector('#button2');

button2.addEventListener('click', function() {
	elem2.className = 'classOfElem2';
alert(elem2.className);
});

// N3
let elem3 = document.querySelector('#elem3');
let button3 = document.querySelector('#button3');

button3.addEventListener('focus', function() {
	elem3.textContent += ' ' + elem3.classList;
});

