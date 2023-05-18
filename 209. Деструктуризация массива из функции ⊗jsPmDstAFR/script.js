"use strict"; //строгий режим


// N1 
console.log('task N1');
function func() {
	return ['John', 'Smit', 'development', 
		'programmer', 2000]; 
}

//let arr = func();
/*
let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
*/
let [name, surname,department, position, salary] = func();
console.log(name, surname, department, position, salary);