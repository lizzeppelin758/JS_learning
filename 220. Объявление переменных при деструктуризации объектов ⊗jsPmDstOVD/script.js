"use strict"; //строгий режим


// N1 
console.log('task N1');
let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let year, month, day; // объявим переменные заранее 
({year, month, day} = obj); // круглые скобки. иначе фигурные скобки будут восприняты как блок кода
console.log(year, month, day);