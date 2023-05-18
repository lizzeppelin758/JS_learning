"use strict"; //строгий режим


// N1 
console.log('task N1');
let arr1 = [1, 2, 3, 4, 5];
function showArr(arr) {
	console.log(arr.shift());
	if(arr.length != 0) {
		showArr(arr);
	}
}
showArr(arr1);

// N2
console.log('task N2');
let arr2 = [1, 2, 3, 4, 5];
function getSum(arr) {
	let sum = arr.shift()**2;
	if(arr.length != 0) {
		sum += getSum(arr);
	}
	return sum;
}
console.log(getSum(arr2));