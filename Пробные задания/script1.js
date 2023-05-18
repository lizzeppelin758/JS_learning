"use strict"; /*строгий режим*/
/*
alert("Hello, there's script number 1!");
*/
/* #4-6
let num=123;
alert(num);
let b=2;
alert(b);
b=45;
alert(b);
let a=1+2+3;
alert(a); */
/* #7
let a=10, b=2;
alert(a+b);
alert(a-b);
alert(a*b);
alert(a/b);
*/
/* #8
let c=10, d=5;
let result=c+d;
alert(result);
*/
/* #9
let a=1, b=2, c=3;
alert(a+b+c);
*/
/* #10
let a=10, b=5, c=a-b, d=7, result=c+d;
alert(result);
*/
/* #11-13
let a=1.5, b=0.75;
alert(a+b);
let c=-100;
alert(c);
let d=-68;
alert(-d);
*/
/* #14-15
let a=13, b=5;
alert(a%b);
alert(2**10);
*/
/* #16
alert('Елизавета');
alert('Романова');
*/
/* #17
let str='!!!';
alert(str);
let str1='java', str2='script';
alert(str1+str2);
let str3='Hello', str4='world';
alert(str3+', '+str4);
*/
/* #18
let longstr='I am starting this learning';
alert(longstr.length);
*/
/* #19 этот код переписать с косыми кавычками. 
let str1 = 'xxx';
let str2 = 'yyy';
let txt  = 'aaa ' + str1 + ' bbb 
	' + str2 + ' ccc'; 
Вот так:
let str1='xxx', str2='yyy';
let txt=`aaa ${str1} bbb ${str2} ccc`;
alert(txt);
*/
/* #20
str=`a
b
c`;
alert(str);
*/
/* #21-25
let a;
alert(a);
let b=null;
alert(b);
let c=true, d=false;
alert(c+' and '+d);
let str1='abc', str2='xyz';
alert(str1*str2);
alert(10/0);
alert(-10/0);
*/
/* #26
console.log(123);
let num=123;
console.log(num);
let num1=123, num2=456;
console.log(num1,num2);
let str='it is text in console';
console.log(str);
let a=10/0;
console.log('look at infinity in console: '+a);

alert(mistake); //ошибка сделана специально, mistake не существует
*/
/* #27
const PI=3.14;
let r=15;
let lenght=2*PI*r;
alert(lenght);
*/
/*#29
let strA='10', strB='20';
alert(Number(strA)+Number(strB));
*/
/* исправить пример с помощью "+" вместо Number, чтобы строки преобраовались в числа
let a = '2';
let b = '3';
alert(a + b); // выведет '23' 
Вот так:
let a = +'2';
let b = +'3';
alert(a + b); // выведет 5
*/
/* #30
let w1='5px', h1='6px';
let numw1=parseInt(w1), numh1=parseInt(h1);
alert(numw1+numh1);
let w2='5.5px', h2='6.25px';
let numw2=parseFloat(w2), numh2=parseFloat(h2);
alert(numw2+numh2);
alert(numw2+numh2+'px');
*/
/* #31
let num1=56, num2=32;
alert(String(num1)+String(num2));
let num3=486724830697023471;
alert(String(num3).length);
let num4=7692, num5=439;
alert(String(num4).length+String(num5).length);
*/
/* #34
let str='abcde';
alert(str[0]+', '+str[2]+', '+str[4]);
let unstr=str[4]+str[3]+str[2]+str[1]+str[0];
alert(unstr);
let num=3;
alert(str[num]);
*/
/* #36
let str='naiti_poslednii_simvol';
let last=str.length-1;
alert(str[last]);
alert(str[last-1]);
alert(str[last-2]);
*/
/* #37
let numstr='12345';
let summ=Number(numstr[0])+Number(numstr[1])+Number(numstr[2])+Number(numstr[3])+Number(numstr[4]);
alert(summ);
let number=12345;
let num_to_str=String(number);
let summnumber=Number(num_to_str[0])+Number(num_to_str[1])+Number(num_to_str[2])+Number(num_to_str[3])+Number(num_to_str[4]);
alert(summnumber);
let multinumber=num_to_str[0]*num_to_str[1]*num_to_str[2]*num_to_str[3]*num_to_str[4];
alert(multinumber);
let unnumber=num_to_str[4]+num_to_str[3]+num_to_str[2]+num_to_str[1]+num_to_str[0];
alert(unnumber);

let a = '5' * 1 + '2' * 1;
alert(a);
let a1 = '5' * '1' + '2' * '1';
alert(a1); */

/*
let num1 = 3;
let num2 = ++num1;
alert(num1); // 4
alert(num2); // 4 */
/*
let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj['x'] );*/

const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr);