"use strict"; //строгий режим
let date = new Date();

// N1 
console.log('task N1');

let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 
		'июн', 
	'июл', 'авг', 'сен', 'окт', 'ноя', 
		'дек' 
];

document.write('<p>Сейчас ' + months[date.getMonth()] + '</p>');







