"use strict"; //строгий режим
// N1 
/**Код должен найти сумму цифр числа:

let num = 12345;
let arr = num.split('');

let sum = 0;
for (let digit of arr) {
	sum += digit;
}

console.log(sum); */
let num1 = 12345;
let arr1 = String(num1).split('');

let sum1 = 0;
for (let digit of arr1) {
	sum1 += +digit;
}

console.log(sum1);

// N2
/**Код должен найти сумму цифр числа:

let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += digit;
}

console.log(sum); */
let num2 = 12345;
let arr2 = String(num2).split('');

let sum2 = 0;
for (let digit of arr2) {
	sum2 += +digit;
}

console.log(sum2);

// N3
/**Код должен найти сумму цифр числа:

let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum = Number(digit);
}

console.log(sum); // почему-то выводит 5, 
	а не 15  */

    let num3 = 12345;
    let arr3 = String(num3).split('');
    
    let sum3 = 0;
    for (let digit of arr3) {
        sum3 += Number(digit);
    }
    
    console.log(sum3); // почему-то выводит 5, а не 15 

// N4
/**Код должен найти сумму цифр числа:

let num = 12345;
let arr = String(num).split('');

let sum = '';
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum); */

let num4 = 12345;
let arr4 = String(num4).split('');

let sum4 = 0;
for (let digit of arr4) {
	sum4 += Number(digit);
}

console.log(sum4);

// N5
/**Код должен найти произведение цифр числа:

let num = 12345;
let arr = String(num).split('');

let prod = 0;
for (let digit of arr) {
	prod *= digit;
}

console.log(prod); */

let num = 12345;
let arr = String(num).split('');

let prod = 1;
for (let digit of arr) {
	prod *= +digit;
}

console.log(prod);

