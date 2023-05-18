"use strict"; //строгий режим

// N1

let text1 = document.querySelector('#text1');


let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
	console.log(text1.innerHTML);
});

// N2

let text2 = document.querySelector('#text2');
let button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
	text2.innerHTML = '<b>'+ text2.textContent + '</b>';
});

