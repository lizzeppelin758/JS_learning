"use strict"; //строгий режим


// N1 
console.log('task N1');
//Не запуская код, определите, что выведется в консоль:

let arr1_1 = [1, 2, 3];
let arr2_1 = [4, 5, 6];

let arr_1  = ['a', ...arr1_1, 'b', 'c', ...arr2_1]; 
console.log(arr_1); // 'a, 1, 2, 3, b, c, 4, 5, 6'

// N2
console.log('task N2');
//Не запуская код, определите, что выведется в консоль:

let arr1_2 = [1, 2, 3];
let arr2_2 = [4, 5, 6];

let arr_2  = ['a', ...arr1_2, ...arr1_2, 'b', 'c']; 
console.log(arr_2); // 'a,1,2,3,1,2,3,b,c'

// N3
console.log('task N3');
//Не запуская код, определите, что выведется в консоль:

let arr1_3 = [1, 2, 3];
let arr2_3 = [...arr1_3, 4, 5, 6];

let arr_3  = ['a', 'b', 'c', ...arr2_3];
console.log(arr_3); // 'a,b,c,1,2,3,4,5,6'

// N4
console.log('task N4');
//Не запуская код, определите, что выведется в консоль:
let arr1_4 = [1, 2, 3];
let arr2_4 = [...arr1_4, 4, 5, 6];
let arr3_4 = [...arr2_4, 7, 8, 9];

let arr_4  = [0, ...arr3_4];
console.log(arr_4); // '0,1,2,3,4,5,6,7,8,9'

// N5
console.log('task N5');
//Не запуская код, определите, что выведется в консоль:

let arr1_5 = [1, 2, 3];
let arr2_5 = [...arr1_5];

console.log(arr2_5); // '1,2,3'


