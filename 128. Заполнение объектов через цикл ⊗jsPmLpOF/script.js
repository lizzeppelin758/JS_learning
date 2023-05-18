"use strict"; //строгий режим
// N1 
let arr1 = ['пн', 'вт', 'ср', 'чт', 
	'пт', 'сб', 'вс']; 
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj1 = {};
for (let i = 0; i < 7; i++)
{
	obj1[arr2[i]] = arr1[i];
}
console.log(obj1);

// N2 
let obj2 = {a: 1, b: 2, c: 3, d: 4, e: 5}; 
let newobj2 = {};
for(let key in obj2)
{
	if (obj2[key] % 2 == 0)
	{
		newobj2[key] = obj2[key];
	}
}
console.log(newobj2);

// N3
let obj3 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newobj3 = {};
for(let key in obj3)
{
	newobj3[obj3[key]] = key;
}
console.log(newobj3);