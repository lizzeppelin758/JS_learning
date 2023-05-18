"use strict"; //строгий режим
// N1 

let arr = [2, 5, 9, 3, 1, 4];
let res1 = 0;
for(let elem of arr)
{
	res1 += elem;

}
console.log(res1);

// N2 
let res2 = 0;
for(let elem of arr)
{ 
	if(elem % 2 == 0) {
	res2 += elem;
	}

}
console.log(res2);

//N3
let res3 = 0;
for(let elem of arr)
{
	res3 += elem**2;
}
console.log(res3);

// N4
let res4 = 1;
for( let elem of arr)
{
	res4 *= elem;
}
console.log(res4);

