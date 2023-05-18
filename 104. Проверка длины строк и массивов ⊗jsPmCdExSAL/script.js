"use strict"; //строгий режим
// N1 

let arr = [8,4,7];
let len = arr.length;
let sum;
if (len == 3)
{
	sum = arr[0]+arr[1]+arr[2];
	alert(sum);
}
else {
	alert('Array is longer then 3');
}
