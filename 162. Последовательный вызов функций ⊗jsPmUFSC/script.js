"use strict"; //строгий режим
// N1 

function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

let res1 = round(sqrt(2));
console.log(res1);

// N2

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

let res2 = sum(sqrt(2),sqrt(3),sqrt(4));
console.log(res2);

// N3

let res3 = round(sum(sqrt(2),sqrt(3),sqrt(4)));
console.log(res3);