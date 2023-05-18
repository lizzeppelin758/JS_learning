"use strict"; //строгий режим


// N1 
console.log('task N1');

let options = {
	//color: 'blue',
	width:  400,
	height: 500,
};
/*
let с;
if (options.с !== undefined) {
	с = options.color;
} else {
	с = 'black';
}

let w = options.width;
let h = options.height;
*/
let {color: c = 'black', width: w, height: h} = options;
console.log(c, w, h);