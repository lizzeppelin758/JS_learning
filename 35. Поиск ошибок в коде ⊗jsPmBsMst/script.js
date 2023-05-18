"use strict"; //строгий режим
//N1
/* Код должен находить сумму чисел:
let num1 = 1;
let num2 = 2;
console.log('сумма: ' + num1 + 
	num2); 
*/
let num1 = 1;
let num2 = 2;
console.log(`сумма:  ${num1 + 
	num2}`); 

//N2 
/* Код должен находить сумму чисел:
let a = 1;
let b = 2;
console.log(a + b + c);
*/

let a = 1;
let b = 2;
console.log(a + b);

//N3
/* Код должен находить сумму цифр числа:
let num = '123';
let sum = num[0] + num[1] + num[2];
console.log(sum);
*/
let num = '123';
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
console.log(sum);

//N4
/* Код должен вывести первую цифру числа:
let num = 123;
console.log(num[0]);
*/
let num_4 = 123;
console.log(String(num[0]));

//N5
/* Код должен был вывести в консоль число 1, но выводит 0:
let a = 0;
console.log(a++);
*/
let a_5 = 0;
console.log(++a_5);

//N6
/* Код должен вывести количество цифр в числе:
let num = 123;
console.log(num.length);
*/
let num_6 = 123;
let num_str=String(num_6);
console.log(num_str.length);

//N7
/*
Код должен найти количество секунд в сутках:
let a = 24 / 60 / 60;
console.log(a);
*/
let a_7 = 24 * 60 * 60;
console.log(a_7); 

//N8
/*
Код должен вывести количество цифр в числе:
let num = 123;
let str = String(num);
console.log(num.length);
*/
let num_8 = 123;
let str_8 = String(num_8);
console.log(str_8.length);

//N9
/*
Код должен вывести последнюю цифру числа:
let num = 123;
let str = String(num);
console.log(num[num.length]);
*/
let num_9 = 123;
let str_9 = String(num_9);
console.log(str_9[str_9.length-1]);

//N10
/*
Код должен вывести количество цифр в числе:
let num = 123;
let str = String(num);
console.log(str.lenght); // неправильно написан метод
*/
let num_10 = 123;
let str_10 = String(num_10);
console.log(str_10.length);

//N11
/*
Код должен вывести последнюю цифру числа:
let num = 123;
let str = String(num);
console.log(str[str.length]);
*/
let num_11 = 123;
let str_11 = String(num_11);
console.log(str_11[str_11.length-1]);

//N12
/*
Код должен найти сумму чисел:
let a = '123';
let b = '456';
let s = Number(a) + String(b);

console.log(s);
*/
let a_12 = '123';
let b_12 = '456';
let s = Number(a_12) + Number(b_12);

console.log(s);

//N13
/*
Код должен найти сумму чисел:
let aaa = 1;
let bbb = 2;
let ccc = 3;

console.log(aaa + bbb + ссс); // ccc не на той раскладке
*/
let aaa = 1;
let bbb = 2;
let ccc = 3;

console.log(aaa + bbb + ccc);