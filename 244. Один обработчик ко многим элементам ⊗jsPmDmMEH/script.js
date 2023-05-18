"use strict"; //строгий режим

function func() {
	console.log('message');
}

let elem1 = document.querySelector('#elem1');
elem1.addEventListener('click', func);

let elem2 = document.querySelector('#elem2');
elem2.addEventListener('click', func);

let elem3 = document.querySelector('#elem3');
elem3.addEventListener('click', func);

let elem4 = document.querySelector('#elem4');
elem4.addEventListener('click', func);

let elem5 = document.querySelector('#elem5');
elem5.addEventListener('click', func);