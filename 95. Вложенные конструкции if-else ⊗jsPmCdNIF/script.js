"use strict"; //строгий режим
// N1 
let num = 54;
let sum = 0;
if (num >= 10 && num <= 99)
{
	sum += num%10;
	num /= 10;
	sum += parseInt(num);
	if( sum <=9 )
	{
		console.log(sum +' - one-digit sum');
	}
	else {
		console.log(sum +' - two-digit sum');
	}
}
else {
	console.log('num is not in right range');
}


//N2




