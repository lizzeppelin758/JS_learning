"use strict"; //строгий режим
// N1 
/** Код должен проверить сумму чисел:

let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}*/
let num1_1 = 1;
let num2_1 = 2;

if (num1_1 + num2_1 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//N2
/** Код должен проверить сумму чисел:

let num1 = '1';
let num2 = '2';

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}*/
let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) == 3) {
	console.log('+++');
} else {
	console.log('---');
}

//N3
/** Код должен проверить сумму чисел:

let num1 = '1';
let num2 = '2';

if (Number(num1 + num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}*/
let num1_3 = '1';
let num2_3 = '2';

if (Number(num1_3) + Number(num2_3) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//N4
/**Код должен проверить первую цифру числа:

let num = 123;

if (num[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
} */
let num = 123;

if (String(num)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

//N5
/**Код должен проверить первую цифру числа:
 * 
let num = 123;

if (String(num[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
} */
let num_5 = 123;

if (String(num_5)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

//N6
/**Код должен проверить первую цифру числа:

let num = 123;

if (String(num)[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
} */
let num_6 = 123;

if (String(num_6)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

//N7
/**Код должен проверить первую цифру числа:

let num = 123;
let first = String(num)[0];

if (first === 1) {
	console.log('+++');
} else {
	console.log('---');
} */

let num_7 = 123;
let first = String(num_7)[0];

if (first == 1) {
	console.log('+++');
} else {
	console.log('---');
} 

//N8
/** Код должен проверить, что в числе ровно две цифры:

let num = 12;

if (num.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}*/
let num_8 = 12;

if (String(num_8).length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//N9
/**Код должен проверить, что в числе ровно две цифры:

let num = 12;
let str = Number(str);

if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
} */
let num_9 = 12;
let str = String(num_9);

if (str.length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//N10
/**Код должен проверить, что в числе ровно две цифры:

let num = 12;

if (String(num.length) === 2) {
	console.log('+++');
} else {
	console.log('---');
} */
let num_10 = 12;

if (String(num_10).length == 2) {
	console.log('+++');
} else {
	console.log('---');
} 

//N11
/** Код должен проверить, что в числе ровно две цифры:

let num = 12;

if (String(num).length === String(2)) {
	console.log('+++');
} else {
	console.log('---');
}*/
let num_11 = 12;

if (String(num_11).length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//N12
/**Код должен проверить, что в числе ровно две цифры:

let num = 12;

if (String(num).lenght === 2) {
	console.log('+++');
} else {
	console.log('---');
} */
let num_12 = 12;

if (String(num_12).length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//N13
/** Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел:

let num = '123033'; // берем в 
	кавычки, чтобы обращаться к цифрам 

let sum1 = num[0] + num[1] + 
	num[2]; 
let sum2 = num[3] + num[4] + 
	num[5]; 

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}*/
let num_13 = '123033'; // берем в кавычки, чтобы обращаться к цифрам 

let sum1 = Number(num_13[0]) + Number(num_13[1]) + Number(num_13[2]); 
let sum2 = Number(num_13[3]) + Number(num_13[4]) +	Number(num_13[5]); 

if (sum1 === sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}