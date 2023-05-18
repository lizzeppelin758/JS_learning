"use strict"; //строгий режим
// N1 
function func() {
	return 'Function or Variable?';
}
// N2
console.log(func());
//N3
console.log(func);
// N4
func = 123;
console.log(func);

// N5

function func1() {
	return 3;
}
// N6
let func2 = func1;
// N7
console.log(func1() + func2());

// N8
let func3 = function() {
	return 1;
}
// N9
let func4 = function() {
	return 2;
}
// N10
console.log(func3() + func4());