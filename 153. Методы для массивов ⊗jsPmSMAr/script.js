"use strict"; //строгий режим
// N1 
console.log('task N1');
let arr1 = [1,2,3];
arr1.push(4,5,6);
console.log(arr1);

// N2
console.log('task N2');
let arr2 = [1,2,3];
arr2.unshift(4,5,6);
console.log(arr2);

// N3
console.log('task N3');
let arr3 = [1,2,3];
let first_delete = arr3.shift();
console.log(first_delete);

// N4
console.log('task N4');
let arr4 = [1,2,3];
let last_delete = arr4.pop();
console.log(last_delete);

// N5
console.log('task N5');
let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.slice(0,3));

// N6
console.log('task N6');
let arr6 = [1, 2, 3, 4, 5];
let new_arr6 = arr6.slice(-2);
console.log(new_arr6);

// N7
console.log('task N7');
let arr7 = [1, 2, 3, 4, 5];
arr7.splice(1,2);
console.log(arr7);

// N8
console.log('task N8');
let arr8 = [1, 2, 3, 4, 5];
arr8.splice(3,0,'a','b','c');
console.log(arr8);

// N9
console.log('task N9');
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(1,0,'a','b');
arr9.splice(6,0,'c');
arr9.splice(8,0,'e');

console.log(arr9);

// N10
console.log('task N10');
let arr10 = [1, 2, 3, 4, 5];
console.log(arr10.indexOf(3));

// N11
console.log('task N11');
let arr11 = [1, 2, 3, 4, 5];
console.log(arr11.includes(3));

