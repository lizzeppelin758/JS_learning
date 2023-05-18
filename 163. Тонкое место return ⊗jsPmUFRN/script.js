"use strict"; //строгий режим
// N1 
//  Что выведется в консоль в результате выполнения следующего кода:

function func1(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func1(3) ); // 3 - функция сразу возвращает принимаемое число, остальные операции не выполняются

// N2
// Что выведется в консоль результате выполнения следующего кода:
function func2(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func2(10) ); // 100, выполняется ветка else
console.log( func2(-5) ); // 5, выполняется ветка if

// N3
// Что выведется в консоль результате выполнения следующего кода:
function func3(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func3(10) ); // 100, выполняется return без условия
console.log( func3(-5) ); // 5, выполняется return в условии