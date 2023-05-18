"use strict"; //строгий режим
// N1 
function func1() {
	return function() {
		return 1;
	};
}

console.log(func1()());

function func2() { 
	return function() {
		return 2;
	};
}

console.log(func2()());

console.log(func1()() + func2()());

// N2
function func3() {
	return function() {
		return function() {
			return function() {
				return function() {
					return '!';
				};
			};
		};
	};
}

console.log(func3()()()()());

// N3
function func4(num1) {
	return function(num2) {
		return function(num3) {
			return num1 + num2 + num3;
		};
	};
}
console.log(func4(2)(3)(4));

// N4
function func5(num1) {
	let arr = [];
	return function(num2) {
		return function(num3) {
			return function(num4) {
				return function() {
					arr.push(num1,num2,num3,num4);
					return arr;
				};
			};
		};
	};
}
console.log(func5(1)(3)(4)(5)());
