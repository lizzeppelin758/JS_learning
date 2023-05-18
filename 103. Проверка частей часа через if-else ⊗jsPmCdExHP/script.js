"use strict"; //строгий режим
// N1 

let min = prompt('Сколько минут на часах?');
if (min >= 0 && min <= 20)
{
	console.log('1 треть');
}
if (min > 20 && min <= 40)
{
	console.log('2 треть');
}
if (min >40 && min <=60)
{
	console.log('3 треть');
}
