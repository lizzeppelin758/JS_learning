"use strict"; //строгий режим
// N1 
let str1 = 'abcd';
if ( str1[0] == 'a')
{
	console.log('!');
}

// N2
let str2 = 'abcx';
if ( str2[str2.length - 1] == 'x')
{
	console.log('!');
}

// N3
let str3 = 'abcx';
if ( str3[0] == 'a' || str3[0] == 'b')
{
	console.log('!');
}
