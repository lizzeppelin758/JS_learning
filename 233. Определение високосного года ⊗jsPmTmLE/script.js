"use strict"; //строгий режим



// N1 
console.log('task N1');

function isLeapYear(year) {
	let date = new Date(year, 2, 0);
	if (date.getDate() == 29) {
		return true;
	}
	else { return false; }
}


console.log(isLeapYear(2024));


