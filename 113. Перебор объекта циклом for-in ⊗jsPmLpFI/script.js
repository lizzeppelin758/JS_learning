"use strict"; //строгий режим
// N1 
let obj1 =  {x: 1, y: 2, z: 3};
for (let key in obj1)
{
	console.log(key);
}

// N2 
let obj2 =  {x: 1, y: 2, z: 3};
for (let key in obj2)
{
	console.log(obj2[key]);
}
