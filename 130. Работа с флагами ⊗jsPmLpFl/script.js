"use strict"; //строгий режим
// N1 
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for (let elem of arr)
{
	if (elem == 'c') {
		flag = true;
		break;
	}
}
if(flag == true) {
console.log('there is "c"');
}
else {
	console.log('there is not "c"');
}

// N2 
let num = prompt('Введите число');
let flag2 = false;
for(let i = 2; i<=num; i++)
{
	if(num != i && num % i == 0)
	{
		flag2 = true;
		break;
	}
}

if (flag2 == true) {
	console.log('Number is not simple');
}
else {
	console.log('Number is simple');
}