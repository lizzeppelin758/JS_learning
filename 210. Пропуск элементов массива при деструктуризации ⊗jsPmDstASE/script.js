"use strict"; //строгий режим


// N1 
console.log('task N1');

let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 
/*
let department = arr[2];
let position   = arr[3];
*/
let [,,department, position,]  = arr;

console.log(department, position);