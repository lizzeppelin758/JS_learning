"use strict"; //строгий режим


// N1 
console.log('task N1');

let options = {
	//color: 'blue',
	width:  400,
	height: 500,
};
/*
let color;
if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}

let width  = options.width;
let height = options.height;
*/
let {color: c = 'red', width: w, height: h} = options;
console.log(c, w, h);