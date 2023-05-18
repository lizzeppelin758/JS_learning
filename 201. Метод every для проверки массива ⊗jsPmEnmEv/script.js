"use strict"; //строгий режим


// N1 
console.log('task N1');
let arr1 = [1,2,3,4,5];

console.log(arr1.every(elem => elem > 0));

// N2
console.log('task N2');
console.log(arr1.every((elem,index) => elem*index < 30));

