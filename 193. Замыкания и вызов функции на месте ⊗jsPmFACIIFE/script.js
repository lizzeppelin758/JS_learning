"use strict"; //строгий режим
// N1 
console.log('task N1');
let counter = (function() {
	let num = 0;
	return function() {
		console.log(num);
		num++;
	};

})();
counter();
counter();
counter();
counter();

// N2
console.log('task N2');
let counter2 = (function() {
	let num = 0;
	return function() {
		if(num <=5) {
		console.log(num);
		num++;
		}
		else {
			num = 0;
		}
	};

})();
counter2();
counter2();
counter2();
counter2();
counter2();
counter2();
counter2();
counter2();
counter2();
counter2();