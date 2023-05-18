"use strict"; //строгий режим
// N1 
let obj1 = {x: 1, y: 2, z: 3};
for (let key in obj1)
{
	obj1[key] *= obj1[key] ;
}
console.log(obj1);

// N2 
let obj2 = {x: 1, y: 2, z: 3};
for (let key in obj2)
{
	obj2[key]++ ;
}
console.log(obj2);
