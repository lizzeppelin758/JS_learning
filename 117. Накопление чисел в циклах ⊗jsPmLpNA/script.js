"use strict"; //строгий режим
// N1 
let res1 = 0;
for(let i = 2; i<=100; i+=2)
{
	res1 +=i;
	console.log(res1);
}
console.log(res1);

// N2 
let res2 = 0;
for(let j = 1; j<=99; j+=2)
{
	res2+=j;
	console.log(res2);
}
console.log(res2);

//N3
let res3 = 1;
for(let k = 1; k <= 20; k++)
{
	res3 *= k;
}
console.log(res3);

