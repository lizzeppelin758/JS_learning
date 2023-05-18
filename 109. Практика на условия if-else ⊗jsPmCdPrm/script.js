"use strict"; //строгий режим
// N1 
let month = 5;
if ( month ==1 || month ==2 || month == 12)
{
	console.log('Зима!');
}
if ( month >= 3 && month <= 5)
{
	console.log('Весна!');
}
if ( month >= 6 && month <= 8)
{
	console.log('Лето!');
}
if ( month >= 9 && month <= 12)
{
	console.log('Осень!');
}

//N2
let str = 'abcde';
if ( str[0] === 'a')
{
	console.log('yes');
}
else {
	console.log('no');
}


//N3
let num = 12345;
let num_str = String(num);
if (num_str[0] == 1 || num_str[0] == 2 || num_str[0] == 3)
{
	console.log('yes');
}
else {
	console.log('no');
}

//N4
let num_4 = prompt('Введите трехзначное число');
let num_4_str = String(num_4);
let sum;
if (num_4_str.length != 3)
{
	alert('Число не трехзначное');
}
else {
	sum = Number(num_4_str[0]) + Number(num_4_str[1]) + Number(num_4_str[2]);
	alert(sum);
}

//N5
let num_5 = prompt('Введите шестизначное число');
let num_5_str = String(num_5);
let sum1, sum2;
if(num_5_str.length != 6)
{
	alert('Число не шестизначное');
}
else {
	sum1 = Number(num_5_str[0]) + Number(num_5_str[1]) + Number(num_5_str[2]);
	sum2 = Number(num_5_str[3]) + Number(num_5_str[4]) + Number(num_5_str[5]);
	if ( sum1 === sum2 )
	{
		alert('Суммы равны');
	}
	else {
		alert('Суммы не равны');
	}
}



