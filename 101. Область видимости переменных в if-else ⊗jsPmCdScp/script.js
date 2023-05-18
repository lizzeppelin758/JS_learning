"use strict"; //строгий режим
// N1 
/**let age = 17;

if (age >= 18) {
	let adult = true;
} else {
	let adult = false;
}

console.log(adult); */
let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);

/**N2
 * let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	let adult = false;
}

console.log(adult);
 */
let age2 = 17;
let adult2;

if (age2 >= 18) {
	adult2 = true;
} else {
	adult2 = false;
}

console.log(adult2);

/**N3
 * let age = 17;
let res;

if (age >= 18) {
	if (age <= 23) {
		let res = 'от 18 до 23';
	} else {
		let res = 'больше 23';
	}
} else {
	let res = 'меньше 18';
}

console.log(res);
 * 
 */
let age3 = 17;
let res3;

if (age3 >= 18) {
	if (age3 <= 23) {
		res3 = 'от 18 до 23';
	} else {
		res3 = 'больше 23';
	}
} else {
	res3 = 'меньше 18';
}

console.log(res3);

/**N4
 * let age = 19;
let res;

if (age >= 18) {
	let res;
	
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);
 */

let age4 = 19;
let res4;

if (age4 >= 18) {
	
	if (age4 <= 23) {
		res4 = 'от 18 до 23';
	} else {
		res4 = 'больше 23';
	}
} else {
	res4 = 'меньше 18';
}

console.log(res4);