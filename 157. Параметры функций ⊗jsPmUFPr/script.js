"use strict"; //строгий режим
// N1 
function func1(num) {
	console.log(num**3);
}

func1(3);

// N2
function func2(num) {
	if( num > 0) {
		console.log('+++');
	} else if( num < 0) {
		console.log('---');
	} else if( num == 0 ) {
		console.log('0');
	}
}

func2(-8);