"use strict"; //строгий режим

function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}

function func4() {
	console.log('4');
}
function func5() {
	console.log('5');
}

let button1 = document.querySelector('#button1');
button1.addEventListener('dblclick', func1);

let button2 = document.querySelector('#button2');
button2.addEventListener('mouseover', func2);

let button3 = document.querySelector('#button3');
button3.addEventListener('mouseout', func3);


let button4 = document.querySelector('#button4');
button4.addEventListener('mouseover', func4);
button4.addEventListener('mouseout', func5);


