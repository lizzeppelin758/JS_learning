"use strict"; //строгий режим


// N1 
console.log('task N1');

let options = {
	color: 'red',
	width:  400,
	height: 500,
};
/*
let color  = options.color;
let width  = options.width;
let height = options.height;
*/
let {color, width, height} = options;
console.log(color, width, height);