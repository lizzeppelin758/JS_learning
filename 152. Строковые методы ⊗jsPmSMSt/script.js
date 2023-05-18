"use strict"; //строгий режим
// N1 
console.log('task N1');
let str1 = 'js';
console.log(str1.toUpperCase());

// N2
console.log('task N2');
let str2 = 'JS';
console.log(str2.toLowerCase());

// N3
console.log('task N3');
let str3 = 'я учу javascript!';
let sub1 = str3.substr(2, 14);
console.log(sub1);
let sub2 = str3.substring(2, 16);
console.log(sub2);
let sub3 = str3.slice(2, -1);
console.log(sub3);

// N4
console.log('task N4');
let str4 = 'abcde';
console.log(str4.indexOf('c'));

// N5
console.log('task N5');
console.log(str4.indexOf('a'));

// N6
console.log('task N6');
let str = 'http://code.mu';
console.log(str.indexOf('a'));

// N7
console.log('task N7');
console.log(str.lastIndexOf('a'));

// N8
console.log('task N8');
console.log(str.indexOf('http://'));

// N9
console.log('task N9');
let str9 = '152. Строковые методы ⊗jsPmSMSt\index.html';

console.log(str9.length, str9.lastIndexOf('.html'));

// N10
console.log(str.startsWith('http://'));

// N11
console.log(str9.endsWith('.html'));

// N12
let str12 = '1-2-3-4-5';
let arr12 = str12.split('-');
console.log(arr12);

// N13
let str13 = '12345';
let arr13 = str13.split('');
console.log(arr13);

// N14
let arr14 = [1,2,3,4,5];
let str14 = arr14.join('-');
console.log(str14);