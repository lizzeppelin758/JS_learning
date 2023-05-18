"use strict"; //строгий режим


// N1 
console.log('task N1');

let options = {
	color: 'red',
	width:  400,
	height: 500,
};
/*
let c = options.color;
let w = options.width;
let h = options.height;
*/
let {color: c, width: w, height: h} = options;
console.log(c, w, h);