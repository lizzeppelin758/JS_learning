"use strict"; //строгий режим


// N1 
console.log('task N1');

let arr = []; 
function getThisYear() {
	return (new Date).getFullYear();
}
function getThisMonth() {
	return (new Date).getMonth()+1;
}
function getDay() {
	return (new Date).getDate();
};
let [year = getThisYear(), month = getThisMonth(), day = getDay()] = arr; 

console.log(year, month,day);