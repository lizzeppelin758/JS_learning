"use strict"; //строгий режим


// N1 
console.log('task N1');
let arr1 = [4,9,16,25,36];
let result1 = arr1.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(result1);


// N2
console.log('task N2');
let arr2 = ['a','b','c','d','e'];
let result2 = arr2.map(function(elem) {
	return elem += '!';
});
console.log(result2);


// N3
console.log('task N3');
let arr3 = ['abc', 'def', 'xyz'];
let result3 = arr3.map(function(elem) {
	return elem.split('').reverse().join('');
});
console.log(result3);

// N4
console.log('task N4');
let arr4 = ['123', '456', '789'];
let result4 = arr4.map(function(elem) {
	elem = elem.split('');
	for(let i = 0; i < elem.length; i++) {
		elem[i] = Number(elem[i]);
	}
	return elem;
});
console.log(result4);

// N5
console.log('task N5');
let arr5 = [1,2,3,4,5,6];
let result5 = arr5.map(function(elem,index) {
	return elem*index;
});
console.log(result5);

// Перебор многомерных массивов

let arr = [[1, 2, 3], [4, 5, 6], 
	[7, 8, 9]]; 

let result = arr.map(function(elem) {
	return elem.map(function(num) {
		return num * num;
	});
});

console.log(result);