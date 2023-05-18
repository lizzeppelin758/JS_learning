"use strict"; //строгий режим
// N1 
//  Что выведется в консоль в результате выполнения следующего кода:

function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		return sum;
	}
}

console.log( func(5) ); // сумма накопится до 1, затем произойдет выход из цикла и из функции по return
function func2(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;

	}
	return sum;
}

console.log(func2(5));