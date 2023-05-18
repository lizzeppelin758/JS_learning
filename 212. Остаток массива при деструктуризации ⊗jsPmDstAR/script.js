"use strict"; //строгий режим


// N1 
console.log('task N1');

let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 
/*
let name    = arr[0];
let surname = arr[1];

let info = arr.slice(2); // все элементы со второго до конца массива
*/
let [name, surname, ...other]  = arr;

console.log(name, surname, other);