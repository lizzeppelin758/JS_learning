"use strict"; //строгий режим


// N1 
console.log('task N1');
let arr1 = [4,-98,32,56,-7,0,23,52,-76,41,3,9,-5,3,8,4,10,0,-12,-35,-60,64,12,67,18,0,11];
let arr2 = [-1,-2,-3,-4];

console.log(arr2.some(elem => elem > 0));

// N2
console.log('task N2');
console.log(arr1.some((elem,index) => elem*index > 30));

