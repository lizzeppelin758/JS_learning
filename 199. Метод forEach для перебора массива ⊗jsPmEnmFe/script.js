"use strict"; //строгий режим


// N1 
console.log('task N1');
let arr1 = [1,2,3,4];
let sum = 0;
let result1 = arr1.forEach(function(elem) {
	sum += elem**2;
});
console.log(sum);


