"use strict"; //строгий режим

// N1

let elem1 = document.querySelector('#elem1');
elem1.addEventListener('focus', function() {
	elem1.value = '1';
});
elem1.addEventListener('blur', function() {
	elem1.value = '2';
});

// N2

let elem2 = document.querySelector('#elem2');

elem2.addEventListener('blur', function() {
	elem2.value *= elem2.value;
});

// N3
let elem3 = document.querySelector('#elem3');

elem3.addEventListener('focus', function() {
	elem3.value = null;
});

