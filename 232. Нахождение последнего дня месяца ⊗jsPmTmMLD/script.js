"use strict"; //строгий режим



// N1 
console.log('task N1');

function isLastMonthDay(month, year) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
}


console.log(isLastMonthDay(3,2021));

// N2
console.log('task N2');
let date2 = new Date(2025, 5, isLastMonthDay(5, 2025));
console.log(date2.getDay());

