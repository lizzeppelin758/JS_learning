"use strict"; //строгий режим
// N1 
let arr1 = [4,9,3,2,5,6,7,0,3,6,7,21,4,3546,0];
for(let i = 0; i <= arr1.length - 1; i++)
{
	console.log(arr1[i]);
	if( arr1[i] == 0) {
		break;
	}
}

// N2 
let arr2 = [9,3,6,2,-4,3,5,-1,7,-4];
let sum = 0;
for(let i = 0; i <= arr2.length - 1; i++)
{ 
	if(arr2[i] >= 0) {
	sum += arr2[i];
	}
	else {
		break;
	}
	
}
console.log(sum);


//N3
let arr3 = [4,5,2,5,3,7,8,45,2,4,8,0,7,3,4,7,8]
for(let i = 0; i <= arr3.length - 1; i++)
{
	if (arr3[i] == 3)
	{
		console.log(i);
		break;
	}
}

// N4
let sum4 = 0;
let i = 1;
while (i)
{
	sum4+=i;
	i++;
	if (sum4 > 1000)
	{
		console.log(i);
		break;
	}
}

