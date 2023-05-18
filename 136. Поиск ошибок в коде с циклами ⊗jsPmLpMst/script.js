"use strict"; //строгий режим
// N1 
/**Код должен вывести числа от 0 до 10:

for (let i = 0; i > 10; i++) {
	console.log(i);
} */
console.log('task N1');
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

// N2
/**Код должен вывести числа от 10 до 0:

for (let i = 10; i > 0; i++) {
	console.log(i);
} */
console.log('task N2');
for (let i = 10; i >= 0; i--) {
	console.log(i);
}

// N3
/**Код должен вывести числа от 10 до 0:

for (let i = 10; i == 0; i--) {
	console.log(i);
} */
console.log('task N3');
for (let i = 10; i >= 0; i--) {
	console.log(i);
}

// N4
/** Код должен вывести числа от 0 до 10:

let i = 0;

while (i >= 10) {
	console.log(i);
	i++;
}*/
console.log('task N4');
let i = 0;

while (i <= 10) {
	console.log(i);
	i++;
}

// N5
/**Код должен найти сумму целых чисел от 1 до 10:

let res;

for (let i = 1; i <= 10; i++) {
	res += i;
}

console.log(res); */
console.log('task N5');
let res = 0;

for (let i = 1; i <= 10; i++) {
	res += i;
}

console.log(res);

// N6
/**Код должен найти произведение целых чисел от 1 до 10:

let res = 0;

for (let i = 1; i <= 10; i++) {
	res *= i;
}

console.log(res); */
console.log('task N6');
let res6 = 1;

for (let i = 1; i <= 10; i++) {
	res6 *= i;
}

console.log(res6);

// N7
/**Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += elem;
}

console.log(sum); // должно вывести 15 */
console.log('task N7');
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum);

// N8
/**Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = '';

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15 */
console.log('task N8');
let arr8 = ['1', '2', '3', '4', '5'];
let sum8 = 0;

for (let elem of arr8) {
	sum8 += +elem;
}

console.log(sum8);

// N9
/**Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum = +elem;
}

console.log(sum); // должно вывести 15 */
console.log('task N9');
let arr9 = ['1', '2', '3', '4', '5'];
let sum9 = 0;

for (let elem of arr9) {
	sum9 += +elem;
}

console.log(sum9);

// N10
/**Код должен найти сумму элементов массива, однако, всегда выводит NaN:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i <= arr.length; 
	i++) { 
	sum += +arr[i];
}

console.log(sum); // почему-то выводит NaN */
console.log('task N10');
let arr10 = ['1', '2', '3', '4', '5'];
let sum10 = 0;

for (let i = 0; i <= arr10.length - 1; 
	i++) { 
	sum10 += +arr10[i];
}

console.log(sum10);

// N11
/*Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length 
	- 1; i++) { 
	sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15 */
console.log('task N11');
let arr11 = ['1', '2', '3', '4', '5'];
let sum11 = 0;

for (let i = 0; i <= arr11.length 
	- 1; i++) { 
	sum11 += +arr11[i];
}

console.log(sum11);

// N12
/**Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; 
	i++) { 
	sum += +i;
}

console.log(sum); // почему-то выводит не 15 */
console.log('task N12');
let arr12 = ['1', '2', '3', '4', '5'];
let sum12 = 0;

for (let i = 0; i < arr12.length; 
	i++) { 
	sum12 += +arr[i];
}

console.log(sum12);

//N13
/**Код должен возвести в квадрат каждый элемент массива:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	elem = elem ** 2;
}

console.log(arr); */
console.log('task N13');
let arr13 = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr13.length - 1; i++) {
	arr13[i] = arr13[i] ** 2;
}

console.log(arr13);

// N14
/**Код должен заполнить массив числами от 1 до 5:

let arr;

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr); */
console.log('task N14');
let arr14 = [];

for (let i = 1; i <= 5; i++) {
	arr14.push(i);
}

console.log(arr14);

//N15
/**Код должен найти сумму элементов объекта:

let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let elem in obj) {
	sum += elem;
}

console.log(sum); */
console.log('task N15');
let obj15 = {a: 1, b: 2, c: 3};
let sum15 = 0;

for (let elem in obj15) {
	sum15 += obj15[elem];
}

console.log(sum15);

//N16
/**Код должен найти сумму элементов объекта:

let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum = +obj.key;
}

console.log(sum); */
console.log('task N16');
let obj16 = {a: 1, b: 2, c: 3};
let sum16 = 0;

for (let key in obj16) {
	sum16 += obj16[key];
}

console.log(sum16);

// N17
/**Код должен проверить, есть ли в массиве число 3 или нет:

let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
	} else {
		res = '---';
	}
}

console.log(res); */
console.log('task N17');
let arr17 = [1, 2, 3, 4, 5];
let res17 = '';

for (let elem of arr17) {
	if (elem === 3) {
		res17 = '+++';
		break;
	}
}

console.log(res17);

// N18
/**Код должен заполнить массив числами от 1 до 5:

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr); */
console.log('task N18');
let arr18 = [];
for (let i = 1; i <= 5; i++) {
	arr18.push(i);
}

console.log(arr18);

// N19
/**Код должен проверить, есть ли в массиве число 3 или нет:

let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
	if (elem === 3) {
		let res = true;
		break;
	}
}

console.log(res); */
console.log('task N19');
let arr19 = [1, 2, 3, 4, 5];
let res19 = false;

for (let elem of arr19) {
	if (elem === 3) {
		res19 = true;
		break;
	}
}

console.log(res19);

// N20
/**Код должен вывести только четные элементы из массива:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 = 0) {
		console.log(elem);
	}
} */
console.log('task N20');
let arr20 = [1, 2, 3, 4, 5];

for (let elem of arr20) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}

//N21
/**Код должен записать в новый массив только нечетные элементы старого массива:

let arr = [1, 2, 3, 4, 5, 6, 7, 
	8, 9]; 

for (let elem of arr) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}

console.log(res); */
console.log('task N21');
let arr21 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
let res21 = [];

for (let elem of arr21) {
	if (elem % 2 != 0) {
		res21.push(elem);
	}
}

console.log(res21);