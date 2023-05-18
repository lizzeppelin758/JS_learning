"use strict"; //строгий режим


// N1 
console.log('task N1');

let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 
/*
let name       = arr[0];
let surname    = arr[1];
let department = arr[2];

let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'trainee';
}
*/
let [name, surname, department, position = 'trainee']  = arr;

console.log(name, surname, department, position);