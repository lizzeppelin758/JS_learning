"use strict"; //строгий режим
// N1 
function func() {
	console.log('!');
} // Function Declaration

// N2
let func_2 = function() {
	console.log('!');
} //  Function Expression

// N3
func_test1();

function func_test1() {
	console.log('It is Function Declaration');
}

// N4
//func_test2(); // не работает, если не функция-выражение не определена выше

let func_test2 = function() {
	console.log('It is Function Expression');
};
func_test2(); // работает только после определения 

// N5
let func1 = function() {console.log('!')};
let func2 = function() {
	console.log('!');
};
function func3() {
	console.log('!');
};

