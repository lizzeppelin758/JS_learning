"use strict"; //строгий режим
// N1 
//Определите, не запуская код, что выведется в консоль:
function test1() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();
}

test1(); // 1

// N2
function test2() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
}

test2(); // nothing

// N3
function test3() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();
}
// nothing

// N4
function test4() {
	let num;
	
	function func() {
		console.log(num);
	}
	
	num = 1
	func();
	
	num = 2
	func();
}

test4(); // 1, 2

// N5
function test5(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	func();
}

test5(1, 2); // 3


// N6
function test6(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	num1 = 2;
	func();
}

test6(1, 2); // 4

// N7
function test7(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num);
}

test7(1); // 1

// N8
function test8(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num + 1);
}

test8(1); // 2

// N9
function test9(num) {
	function func(localNum) {
		console.log(num);
	}
	
	func(num + 1);
}

test9(1); // 1

// N10
function test10(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(num);
}

test10(1); // 1

// N11
function test11(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	//console.log(localNum);
}

test11(1); // error

// N12
function test12(num) {
	function func(localNum) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test12(1); // 2

// N13
function test13(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
}

test13(1); // 1

// N14
function test14(num) {
	function func(num) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test14(1); // 1

// N15
function test15(num) {
	function func(num) {
		console.log(num);
	}
	
	num = 2;
	func(num);
}

test15(1); // 2

// N16
function test16(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
	num = 2;
}

test16(1); // 1

