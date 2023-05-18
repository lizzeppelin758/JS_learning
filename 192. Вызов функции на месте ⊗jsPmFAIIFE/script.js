"use strict"; //строгий режим
// N1 
console.log('task N1');
//Определите, не запуская код, что выведется в консоль:
!function() {
	console.log('!');
}(); // '!'

// N2
/* console.log('taskN2');
function() {
	console.log('!');
}(); // error
*/

// N3
console.log('task N3');
let result3 = function() {
	return '!';
}();
		
console.log(result3); // '!'

// N4
//Определите, не запуская код, что выведется в консоль:
let result4 = function() {
	return '!';
};
		
console.log(result4); //  '{ return '!'; }

// N5
console.log('task N5');
let result5 = function() {
	return '!';
};
		
console.log(result5()); // '!'

//N6
console.log('task N6');
let result6 = function() {return 1;}() 
	+ function() {return 2;}(); 
console.log(result6); // 3

// N7
console.log('task N7');
let result7 = (function() {
	return '!';
}());

console.log(result7); //  '!'



// N8
console.log('task N8');
let result8 = (function() {
	return '!';
})();

console.log(result8); // '!'

// N9
console.log('task N9');
let result9 = (function() {
	return '!';
});

console.log(result9); // '{	return '!'; }

// N10
console.log('task N10');
let result = (function() {
	return '!';
});

console.log(result()); // '!'

// N11
console.log('task N11');
(function(num1, num2) {
	console.log(num1 + num2);
})(1, 2); // 3

// N12
/* Допишите следующий код так, чтобы его запуск алертом выводил '!':

(function() {
	// какой-то код
})()()(); */
console.log('task N12');
(function() {
	return function() {
		return function() {
			console.log('!');
		};
	};
})()()();

// N13
/**
 * Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

(function() {
	// какой-то код
})(1)(2);
 */
console.log('task N13');
(function(num1) {
	return function(num2){
		console.log(num1 + num2);
	};
})(1)(2);

// N14
/**Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

(function() {
	// какой-то код
})(1)(2)(3); */
console.log('task N14');
(function(num1) {
	return function(num2) {
		
		return function(num3) {
			console.log(num1 + num2 + num3);
		};
	};
})(1)(2)(3);

// N15
//Определите, не запуская код, что выведется в консоль:
console.log('task N15');

let str15 = 'str';

(function() {
	console.log(1);
})(); // 1

// N16
console.log('task N16');
let str16 = 'str'

(function() {
	console.log(1);
})(); // error