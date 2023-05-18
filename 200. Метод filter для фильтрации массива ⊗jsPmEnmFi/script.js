"use strict"; //строгий режим


// N1 
console.log('task N1');
let arr1 = [4,-98,32,56,-7,0,23,52,-76,41,3,9,-5,3,8,4,10,0,-12,-35,-60,64,12,67,18,0,11];

console.log(arr1.filter(elem => elem > 0));

// N2
console.log('task N2');
console.log(arr1.filter(elem => elem < 0));

// N3
console.log('task N3');
console.log( arr1.filter(elem => elem > 0 && elem < 10));


//N4
console.log('task N4');
let arr4 = [ 'hello', 'bonjour', 'hi', 'privet', 'aloha', 'ni hao', 'selam', 'hallo', 'ciao'];
console.log(arr4.filter(elem => elem.length >5));

// N5
console.log('task N5');
console.log(arr1.filter((elem,index) => elem*index <30));

// N6
console.log('task N6');
let arr6 = [1, 2, [3, 4], 5, [6, 7]];
console.log(arr6.filter(elem => typeof elem != 'object'));

// N7
console.log('task N7');
console.log(arr1.filter(elem => elem < 0).length);