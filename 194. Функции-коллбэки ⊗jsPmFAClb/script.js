"use strict"; //строгий режим
// N1 
console.log('task N1');
function changeArr(arr, callback) {
	let result = [];
	for(let elem of arr) {
		result.push(callback(elem));
	}
	return result;
}
let twice_arr = changeArr([1,2,3,4,5], function(num) {
	return num*2;
});
console.log(twice_arr);


// N2
console.log('task N2');
let reverse_letters = changeArr( ['abc','def','xyz'], function(elem) {
	return elem.split('').reverse().join('');
});
console.log(reverse_letters);

// N3
console.log('task N2');
let big_first_letter = changeArr( ['abc','def','xyz'], function(elem) {
	return elem.slice(0,1).toUpperCase() + elem.slice(1);
});
console.log(big_first_letter);

// N4
function cube(num) {
	return num ** 3;
}

let cube_arr = changeArr([1,2,3,4,5], cube);
console.log(cube_arr);



