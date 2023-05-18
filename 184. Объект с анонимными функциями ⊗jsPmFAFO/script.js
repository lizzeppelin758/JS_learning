"use strict"; //строгий режим
// N1 
let obj = {
	res1: function() { return 1; },
	res2: function() { return 2; },
	res3: function() { return 3; }
};
console.log( obj.res1() + obj.res2() + obj.res3() );
// N2
for( let res in obj ) {
	console.log(obj[res]());
}
// N3
let operations = {
	sum: function(arr) {
		let sum_elem = 0;
		for (let elem of arr) {
			sum_elem += elem;
		}
		return sum_elem;
	},
	sum_square: function(arr) {
		let sum_elem_2 = 0;
		for (let elem of arr) {
			sum_elem_2 += elem**2;
		}
		return sum_elem_2;
	},
	sum_cube: function(arr) {
		let sum_elem_3 = 0;
		for (let elem of arr) {
			sum_elem_3 += elem**3;
		}
		return sum_elem_3;
	},
};
let arr3 = [1,2,3,4];
console.log(operations.sum(arr3));
console.log(operations.sum_square(arr3));
console.log(operations.sum_cube(arr3));