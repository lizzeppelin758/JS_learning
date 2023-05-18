"use strict"; //строгий режим
// N1 
console.log('task N1');
console.log(Math.pow(2,10));
// N2
console.log('task N2');
console.log(Math.sqrt(245));
// N3
console.log('task N3');
let arr1 = [4, 2, 5, 19, 13, 0, 10];
let sum1 = 0;
for( let i = 0; i < arr1.length; i ++) {
	sum1 += Math.pow(arr1[i],3);
}
let res1 = Math.sqrt(sum1);
console.log(res1);

// N4
console.log('task N4');
let num4 = Math.sqrt(379);
console.log(num4.toFixed(), num4.toFixed(1), num4.toFixed(2));

// N5
console.log('task N5');
let num5 = Math.sqrt(587);
let res5 = {
	'floor' : Math.floor(num5),
	'ceil' : Math.ceil(num5),
};
console.log(res5);

// N6
console.log('task N6');
console.log(Math.max(4,-2,5,19,-130,0,10));
console.log(Math.min(4,-2,5,19,-130,0,10));
let arr6 = [4,-2,5,19,-130,0,10];
console.log(Math.max.apply(null,arr6));
console.log(Math.min.apply(null,arr6));

// N7
function getRandomInt(min, max) {
	let rand = Math.random();
	return Math.floor(rand * (max - min + 1)) + min;

}
console.log(getRandomInt(1, 100));
// N8

let arr8 = [];
for( let i  = 0; i <10; i++) {
	arr8[i] = (getRandomInt(-1000000,+1000000)).toFixed();
}
console.log(arr8);


// N9
let a = 5;
let b = -6;
let res9 = Math.abs(b-a);
console.log(res9);