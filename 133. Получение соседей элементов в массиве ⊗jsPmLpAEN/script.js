"use strict"; //строгий режим
// N1 
let arr = [1,6,7,3,9,3,0,4,2,1,7]; 

for (let i = 0; i <= arr.length - 2; i++)
{
	console.log(arr[i+1]);
}

// N2

for (let i = 0; i <= arr.length - 2; i++)
{
	console.log(arr[i] + arr[i+1]);
}

// N3
for (let i = 2; i <= arr.length - 1; i++)
{
	console.log(arr[i-1], arr[i-2]);
}

// N4

for (let i = 2; i <= arr.length - 1; i++)
{
	console.log(arr[i-1] + arr[i-2] + arr[i]);
}

// N5
for (let i = 1; i <= arr.length - 2; i++)
{
	console.log(arr[i-1] + arr[i] + arr[i+1]);
}