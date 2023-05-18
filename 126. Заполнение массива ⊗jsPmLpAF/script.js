"use strict"; //строгий режим
// N1 
let arr1 = [];
for (let i = 1; i <= 10; i++)
{
	arr1.push(i);
}
console.log(arr1);

// N2 
let arr2 = [];
for(let i = 1; i <= 10; i++)
{
	arr2.push('x');
}
console.log(arr2);

// N3
let arr3 = [5,7,9,-1,56,-4,-32,87,-4,56,13,48,-64];
let arr4 = [];
for(let elem of arr3)
{
	if(elem >= 0)
	{
		arr4.push(elem);
	}
}
console.log(arr4);
