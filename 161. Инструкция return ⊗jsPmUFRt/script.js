"use strict"; //строгий режим
// N1 

function func1(num) {
	return num**3;
}
let res1 = func1(3);
console.log(res1);

// N2


function func2(num) {
	return Math.sqrt(num).toFixed(2);
}
let res2 = Number(func2(3)) + Number(func2(4));
console.log(res2);