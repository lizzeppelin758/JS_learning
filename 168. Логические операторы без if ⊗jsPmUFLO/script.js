"use strict"; //строгий режим
// N1 
/**function func(a, b) {
	if (a == b) {
		return true;
	} else {
		return false;
	}
} */
function func1(a, b) {
	return a == b;
}
let a1 = 1, b1 = 3;
console.log(func1(a1,b1));

// N2
/**function func(a, b) {
	if (a != b) {
		return true;
	} else {
		return false;
	}
} */
function func2(a, b) {
	return a!=b;
}
let a2 = 3, b2 = 3;
console.log(func2(a2, b2));

// N3
/**function func(a, b) {
	if (a + b >= 10) {
		return true;
	} else {
		return false;
	}
} */
function func3(a, b) {
	return a + b >= 10;
}
let a3 = 3, b3 = 6;
console.log(func3(a3, b3));

// N4
/** function func(num) {
	if (num >= 0) {
		return true;
	} else {
		return false;
	}
}*/
function func4(num) {
	return num >= 0;
}
let num = -4;
console.log(func4(num));