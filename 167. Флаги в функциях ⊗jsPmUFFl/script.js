"use strict"; //строгий режим
// N1 
function func1(arr) {
for (let elem of arr) {
	if(elem % 2 != 0) {
		return false;
	}
}	
return true;
}
let arr1 = [2,4,6,8,10];
console.log(func1(arr1));

// N2
function func2(num) {
	let arr = String(num).split('');
	for( let elem of arr) {
		if(elem % 2 == 0) {
			return false;
		}
	}
	return true;
}
let num2 = 1359;
console.log(func2(num2));

// N3
function func3(arr) {
	for( let i = 0; i < arr.length; i++) {
		if(arr[i] == arr[i+1]) {
			return true;
		}
	}
	return false;
}

let arr3 = [1,2,3,4,5,6,7,8];
console.log(func3(arr3));
