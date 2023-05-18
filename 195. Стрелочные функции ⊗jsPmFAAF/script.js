"use strict"; //строгий режим

function every(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк 
	}
	
	return result;
}
// N1 
console.log('task N1');
/**Дана следующая функция с коллбэком:

let result = every([1, 2, 3, 4, 5], 
	function(elem) { 
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});
Упростите коллбэк через стрелочную функцию. */

let result1 = every([1, 2, 3, 4, 5], elem => elem > 0 );
console.log(result1)

// N2
console.log('task N2');
/** Дана следующая функция с коллбэком:

let result = every([1, 2, 3, 4, 5], 
	function(elem, index) { 
	if (elem * index > 10) {
		return true;
	} else {
		return false;
	}
});
Упростите коллбэк через стрелочную функцию.*/

function each(arr, callback) {
	let result = [];
	
	for (let index = 0; index < arr.length; index++) {
		result.push( callback(arr[index],index) ); // вызываем функцию-коллбэк 
	}
	
	return result;
}

let result2 = each([1, 2, 3, 4, 5], (elem,index) => elem*index > 10 );
console.log(result2);

// N3
console.log('task N3');
/** Дана следующая функция с коллбэком:

let arr = [[1, 2, 3], [4, 5, 6], 
	[7, 8, 9]]; 

let result = each(arr, function(elem, 
	index) { 
	if (elem * index > 10) {
		return true;
	} else {
		return false;
	}
});
Упростите коллбэк через стрелочную функцию.
 */
function each2(arr, callback) {
	let result = [];
	
	for (let index = 0; index < arr.length; index++) {
		result[index] = [];
		for(let index2 = 0; index2 < arr[index].length; index2++) {

			result[index].push( callback(arr[index][index2],index2) ); 

		}
	}
	
	return result;
}
let arr = [[1, 2, 3], [4, 5, 6], 
	[7, 8, 9]]; 

let result3 = each2(arr, (elem, 
	index) => elem * index > 10);
	console.log(result3);