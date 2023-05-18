"use strict"; //строгий режим


// N1 
console.log('task N1');
let arr1 = [1, 2, 3, 4, 5];
function func1(num1, num2, num3, 
	num4, num5) { 
	return num1 + num2 + num3 + num4 
		+ num5; 
}
console.log(func1(...arr1));

// N2
console.log('task N2');
//Не запуская код, определите, что выведется в консоль:

function func(n1, n2, n3, n4, n5, n6, n7, n8) { 
	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8); 
}

console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) ); // 260

// N3
console.log('task N3');
let arr3 = [48,76,12,11,45,32,71,54,33,27,18,28,37,35,68,52,41];
console.log(Math.min(...arr3));




