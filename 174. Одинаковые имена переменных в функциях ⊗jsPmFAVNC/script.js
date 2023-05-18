"use strict"; //строгий режим
// N1 
/*Определите, не запуская код, что выведется в консоль: */
let num1 = 1;

function func1() {
	num1 = 2;
}
func1();

console.log(num1); // 2

// N2
let num2 = 1;

function func2() {
	let num2 = 2;
}
func2();

console.log(num2); // 1




