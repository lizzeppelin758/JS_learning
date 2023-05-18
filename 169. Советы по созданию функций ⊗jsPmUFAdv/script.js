"use strict"; //строгий режим
// N1 
/**Напишите, какие недостатки у следующего кода, и исправьте их:

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res / arr.length;
}
Название функции не отражает ее действие */
function getArithMean(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res / arr.length;
}

// N2
/**Напишите, какие недостатки у следующего кода, и исправьте их:

function func(arr1, arr2) {
	let res1 = 0;
	
	for (let elem of arr) {
		res1 += elem;
	}
	
	let res2 = 0;
	
	for (let elem of arr) {
		res2 += elem;
	}
	
	return res1 / res2;
} 
Название функции не отражает ее действие. Внутри функции два повторяющихся блока*/
function calcSumElemArr(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}
	return res;
}
function showDifferenceArrays(arr1, arr2) {
	let res1 = calcSumElemArr(arr1);
	let res2 = calcSumElemArr(arr2);
	return res1 / res2;
}

// N3
/**Напишите, какие недостатки у следующего кода, и исправьте их:

function getSum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res *= elem;
	}
	
	return res;
}
Название некорретно */
function getProdElemArr(arr) {
	let res = 1;
	
	for (let elem of arr) {
		res *= elem;
	}
	
	return res;
}

let arr1 = [1,2,3,4,5,6];
let arr2 = [1,2,3,4,5,6];
console.log(getArithMean(arr1));
console.log(showDifferenceArrays(arr1,arr2));
console.log(getProdElemArr(arr1));