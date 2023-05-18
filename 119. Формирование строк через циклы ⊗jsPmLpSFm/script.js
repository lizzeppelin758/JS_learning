"use strict"; //строгий режим
// N1 
let str1 = '';
for(let i = 0; i < 5; i++)
{
	str1 += '-';

}
console.log(str1);

// N2 
let str2 = '';
for(let i = 1; i <= 9; i++)
{ 
str2 += i;
}
console.log(str2);

//N3
let str3 = '';
for(let i = 9; i >=1; i--)
{
	str3 += i;
}
console.log(str3);

// N4
let str4 = '';
for(let i = 0; i <= 9; i++)
{
	str4 += '-'+i;
	if (i == 9)
	{
		str4 += '-';
	}
}
console.log(str4);

