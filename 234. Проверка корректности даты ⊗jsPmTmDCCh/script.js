"use strict"; //строгий режим



// N1 
console.log('task N1');

function checkDate(year, month, day) {
	let date = new Date(year, month, day);
	if (date.getDate() == day && date.getMonth() == month && date.getFullYear() == year) {
		return true;
	}
	else { return false; }
}


console.log(checkDate(2025,0,32));


