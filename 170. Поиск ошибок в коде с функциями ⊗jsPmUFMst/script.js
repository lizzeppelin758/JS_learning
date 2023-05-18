"use strict"; //строгий режим
// N1 
/**Код должен найти сумму результатов работы двух функций:

function func1() {
	console.log(3);
}
function func2() {
	console.log(5);
}

console.log( func1() + func2() ); */
console.log('task N1');
function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() );

// N2
/**Код должен найти сумму элементов массива:

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
		return res;
	}
}

console.log(sum([1, 2, 3, 4, 5]));*/
console.log('task N2');
function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	return res;
}

console.log(sum([1, 2, 3, 4, 5]));

// N3
/**Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:

let arr = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	console.log(res);
} */
console.log('task N3');
let arr = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	return res;

}
console.log(func(arr));

// N4
/**Код должен найти сумму результатов работы двух функций:

function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1 + func2 ); */
console.log('task N4');
function func3() {
	return 3;
}
function func4() {
	return 5;
}

console.log( func3() + func4() ); 

// N5
/** Код должен найти сумму элементов массива:

let sum = sum([1, 2, 3, 4, 5]);
console.log(sum);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return elem;
}*/
console.log('task N5');
let sum5 = getSum5([1, 2, 3, 4, 5]);
console.log(sum5);

function getSum5(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}

// N6
/**Код должен найти сумму элементов массива:

let res = sum([1, 2, 3, 4, 5]);
console.log(res);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
} */
console.log('task N6');
let res6 = getSum6([1, 2, 3, 4, 5]);
console.log(res6);

function getSum6(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}

// N7
/**Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:

function add(num) {
	if (num <= 9) {
		return '0' + num;
	}
} */
console.log('task N7');
function addNull(num) {
	if (num <= 9) {
		return '0' + num;
	}
	return num;
}
console.log(addNull(7));
console.log(addNull(14));

// N8
/**Код должен найти сумму элементов массива:

let arr = [1, 2, 3, 4, 5];
let sum = sum(arr);
console.log(sum);

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
} */
console.log('task N8');
let arr8 = [1, 2, 3, 4, 5];
let sum8 = getSum8(arr8);
console.log(sum8);

function getSum8(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}

// N9
/**Код должен найти сумму цифр числа:

let num = 12345;
let res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
	let arr = num.split('');
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
} */
console.log('task N9')
let num9 = 12345;
let res9 = getDigitsSum(num9);
console.log(res9);

function getDigitsSum(num) {
	let arr = String(num).split('');
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
	return sum;
} 

// N10
/**Код должен проверить число на то, что оно является простым:

console.log(isPrime(13)); // должен 
	вывести true 

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i !== 0) {
			return true;
		} else {
			return false;
		}
	}
} */
console.log('task N10');
console.log(isPrime(13));
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		} 
	}
	return true;
} 