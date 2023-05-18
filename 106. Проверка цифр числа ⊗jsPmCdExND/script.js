"use strict"; //строгий режим
// N1 
let num1 = 75480;
let str_num1 = String(num1);
if (str_num1[str_num1.length - 1] == 0)
{
	console.log('0');
}
else {
	console.log('not 0')
}

// N2
let num2 = 64678;
let str_num2 = String(num2);
let last_str = str_num2[str_num2.length - 1]
if ( last_str==0 || last_str==2 || last_str==4 || last_str==6 || last_str==8)
{
	console.log('четное');
}
else {
	console.log('нечетное')
}

