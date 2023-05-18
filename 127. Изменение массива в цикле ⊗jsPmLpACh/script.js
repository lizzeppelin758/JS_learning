"use strict"; //строгий режим
// N1 
let arr1 = [5,8,3,0,4,-3,-6,-9,6,4,2,1];
for (let i = 0; i <= arr1.length - 1; i++)
{
	arr1[i] = arr1[i]**2;
}
console.log(arr1);

// N2 
let arr2 = [5,6,7,8,9,10];
for(let i = 0; i <= arr2.length -1; i++)
{
	arr2[i] --;
}
console.log(arr2);

// N3
let arr3 = [5,7,9,-1,56,-4,-32,87,-4,56,13,48,-64];

for(let i = 0; i <= arr3.length - 1; i++)
{
	arr3[i] += 10;
}
console.log(arr3);
