"use strict"; //строгий режим
// N1 
function test(func1, func2, func3) {
	console.log(func1() + func2() + func3());
}
test( function() {return 1;},
	function() {return 2;},
	function() {return 3});

// N2

// N3
function func1() {
	return 1;
}
function func2() {
	return 2;
}
function func3() {
	return 3;
}

test(func1, func2, func3);

// N4
let func1_1 = function() { return 1; };
let func2_1 = function() { return 2; };
let func3_1 = function() { return 3; };

test(func1_1, func2_1, func3_1);

// N5
function test1(func) {
	console.log(func(3));
}

test1( function(num) {
	return num**3;
});

// N6
function func(num) {
	return num**3;
}

test1( func );

// N7
let func_1 = function(num) { return num**3; };

test1(func_1);

// N8
function func_2(num1, num2) {
	return num1 +num2;
}
function test2(func) {
	console.log(func(2,3));
}
test2(func_2);

// N9
function test3(num, func1, func2) {
	return func1(num) + func2(num);
}

function square_num(num) {
	return num**2;
}
function cube_num(num) {
	return num**3;
}

console.log(test3(3, square_num, cube_num));

// N10
function test4(arr, func) {
	for(let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}
	return arr;
}
let result = test4( [1,2,3,4,5], function(num) {return num**2;});
console.log(result);

// N11
let result1 = test4( [1,2,3,4,5], function(num) {return num**3;});
console.log(result1);