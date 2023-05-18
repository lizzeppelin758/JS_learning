"use strict"; //строгий режим
// N1 
let arr = [
	function() { return 1; },
	function() { return 2; },
	function() { return 3; }
];
// N2
console.log(arr[2]());
// N3
let sum = arr[0]() + arr[1]() + arr[2]();
console.log(sum);
// N4
for(let func of arr) {
	console.log(func());
}