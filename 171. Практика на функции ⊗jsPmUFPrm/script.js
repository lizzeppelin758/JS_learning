"use strict"; //строгий режим
// N1 
/*Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов. */
function getArrElemSum(arr) {
	let res = 0;
	for (let elem of arr) {
		res += Number(elem);
	}
	return res;
}
let arr1 = [1,2,3,4,5];
console.log(getArrElemSum(arr1));

// N2
/**Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.*/
function getDividers(num) {
	let dividers = [];
	for (let i = 1; i < num; i++) {
		if(num % i == 0) {
			dividers.push(i);
		}
	}
	return dividers;
}
let num2 = 9;
console.log(getDividers(num2));

// N3
/**Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов. */
function splitString(str) {
	return str.split('');
}
let str3 = 'somewords';
console.log(splitString(str3));

// N4
/** Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.*/
function reverseString(str) {
	return splitString(str).reverse().join('');
}

let str4 = 'need to reverse';
console.log(reverseString(str4));

// N5 
/**Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки. */

function upFirstLetter(str) {
	return str.slice(0,1).toUpperCase() + str.slice(1);
}

let str5 = 'moscow';
console.log(upFirstLetter(str5));

// N6
/**Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки. */

function upEverFisrtLetter(str) {
	let arr = str.split(' ');
	for(let i = 0; i < arr.length; i++) {
		arr[i] = upFirstLetter(arr[i]);
	}
	return arr.join(' ');
} 
let str6 = 'moscow, omsk, tomsk';
console.log(upEverFisrtLetter(str6));

// N7
/**Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. */
function doArrToNum(num) {
	let arr = [];
	for( let i = 0; i < num; i ++) {
		arr[i] = i+1;
	}
	return arr;
}
let num7 = 67;
console.log(doArrToNum(num7));

// N8
/**Сделайте функцию, которая будет возвращать случайный элемент из массива. */
function getRandomInt(min, max) {
	let rand = Math.random();
	return Math.floor(rand * (max - min + 1)) + min;

}
function getRandomElem(arr) {
	console.log(arr[getRandomInt(0,arr.length-1)]);
}
let arr8 = [1,2,3,4,5,6,7,8,9,10];
getRandomElem(arr8);

// N9
/**Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет. */

function isPrime(num) {
	for(let i = 2; i < num; i++) {
		if(num % i == 0) {
			return false;
		}
	}
	return true;
}

let num9 = 97;
console.log(isPrime(num9));

// N10
/**Сделайте функцию, которая будет проверять пару чисел на дружественность. Дружественные числа - два числа, для которых сумма всех собственных делителей первого числа равна второму числу и наоборот, сумма всех собственных делителей второго числа равна первому числу. */

function chekFriendNum(num1,num2) {
	let div_num1 = getDividers(num1);

	let div_num2 = getDividers(num2);

	let sum_divide1 = getArrElemSum(div_num1);

	let sum_divide2 = getArrElemSum(div_num2);
	
	if(sum_divide1 == num2 && sum_divide2 == num1) {
		return true;
	} else {
		return false;
	}
}

let num10_1 = 220;
let num10_2 = 284;
console.log(chekFriendNum(num10_1,num10_2));

// N11
/**Используя созданную вами функцию из предыдущей задачи найдите все пары дружественных чисел в промежутке от 1 до 1000. */
function findFriendPairs(min,max) {
	let arr = [];
	let k = 0;
	for( let i = min; i <= max; i++) {
		arr[k] = [];
		for(let j = min; j <= max; j++) {
				
			if(i != j && chekFriendNum(i,j) == true) {
				arr[k] = [i,j];
				k++;
			}
		}
	}
	return arr;
}

let min1 = 1, max1 = 1000;
//console.log(findFriendPairs(min1,max1));

// N12
/**Сделайте функцию, которая будет проверять число на совершенность. Совершенное число - это число, сумма собственных делителей которого равна этому числу. */
function checkPerfectNum(num) {
	if(getArrElemSum(getDividers(num)) == num) {
		return true;
	} else {
		return false;
	}
}
let num12 = 818;
console.log(checkPerfectNum(num12));

// N13 
/** Найдите все счастливые билеты. Счастливый билет - это билет, в котором сумма первых трех цифр его номера равна сумме вторых трех цифр его номера.*/

function findHappyTicket(num) {
	let str = String(num).split('');
	if(str.length == 6) {
		let part1 = str.slice(0,3);
		let part2 = str.slice(3); 
	if(getArrElemSum(part1) == getArrElemSum(part2)) {
			return true;

		} else {
			return false;
		}
	} else {
		return false;

	}
}

let ticket13 = 143260;
console.log(findHappyTicket(ticket13));

// N14
/**Сделайте функцию, которая параметром будет принимать два числа и возвращать массив их общих делителей. */

function getCommonDiv(num1,num2) {
	let divide1 = getDividers(num1);

	let divide2 = getDividers(num2);

	let maxLength;
	let commondivs = [];
	if(divide1.length >= divide2.length) {
		maxLength = divide1.length;
	} else {
		maxLength = divide2.length;
	}

	for(let i = 0; i < maxLength; i++) {
		for(let j = 0; j < maxLength; j++)
		if(divide1[i] == divide2[j]) {

			commondivs.push(divide1[i]);
		}
	}
	return commondivs;
}
let num14_1 = 12, num14_2 = 120;
console.log(getCommonDiv(num14_1,num14_2));

// N15
/**Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит. */

function translitRuLat(str) {
	let translit_table = {
		'а':'a', 'к':'k', 'х':'h',
		'б':'b', 'л':'l', 'ц':'c',
		'в':'v', 'м':'m', 'ч':'ch',
		'г':'g', 'н':'n', 'ш':'sh',
		'д':'d', 'о':'o', 'щ':'sch',
		'е':'e', 'п':'p', 'ь':'',
		'ё':'e', 'р':'r', 'ы':'y',
		'ж':'zh', 'с':'s', 'ъ':'',
		'з':'z', 'т':'t', 'э':'e',
		'и':'i', 'у':'u', 'ю':'yu',
		'й':'y', 'ф':'f', 'я':'ya',
	
		'А':'A', 'К':'K', 'Ч':'H',
		'Б':'B', 'Л':'L', 'Ц':'C',
		'В':'V', 'М':'M', 'Ч':'Ch',
		'Г':'G', 'Н':'N', 'Ш':'Sh',
		'Д':'D', 'О':'O', 'Щ':'Sch',
		'Е':'E', 'П':'P', 'Ь':'',
		'Ё':'E', 'Р':'R', 'Ы':'Y',
		'Ж':'Zh', 'С':'S', 'Ъ':'',
		'З':'Z', 'Т':'T', 'Э':'E',
		'И':'I', 'У':'U', 'Ю':'Yu',
		'Й':'Y', 'Ф':'F', 'Я':'Ya'
	};
	let lat_str = '';
for(let i = 0; i < str.length; i++) {
	if(translit_table[str[i]] == undefined) {
		lat_str += str[i];
	} else { 
	lat_str += translit_table[str[i]];
	}
}
	return lat_str;
}

let text = 'Перевести на латиницу';
console.log(translitRuLat(text));

// Сделайте функцию, которая будет принимать число, а возвращать это число прописью. Пусть функция работает с числами до 999. Смотрите пример: func(123); // выведет 'сто двадцать три'



function makeNumbersToWords(num) {
	let ones = {
		0: 'ноль',
		1: 'один', 
		2: 'два', 
		3: 'три', 
		4: 'четыре', 
		5: 'пять',	
		6: 'шесть', 
		7: 'семь', 
		8: 'восемь', 
		9: 'девять'
	};
	let after_ten = {
		10: 'десять',
		11: 'одиннадцать',
		12: 'двенадцать',
		13: 'тринадцать',
		14: 'четырнадцать',
		15: 'пятнадцать',
		16: 'шестнадцать',
		17: 'семнадцать',
		18: 'восемнадцать',
		19: 'девятнадцать',
	}
	let decades = {
		2: 'двадцать', 
		3: 'тридцать', 
		4: 'сорок', 
		5: 'пятьдесят',	
		6: 'шестьдесят', 
		7: 'семьдесят', 
		8: 'восемьдесят', 
		9: 'девяносто'
	};
	let hundreds = {
		1: 'сто',
		2: 'двести',
		3: 'триста',
		4: 'четыреста',
		5: 'пятьсот',
		6: 'шестьсот',
		7: 'семьсот',
		8: 'восемьсот',
		9: 'девятьсот',
	};
	let res = [];
	let arr = String(num).split('').reverse();
	for(let i = 0; i < arr.length; i++) {
		if ( i == 0 ) {
			if (arr[i] != 0) {
				res.push(ones[arr[i]]); 
			}
			
		}
		if ( i == 1 ) {
			if( arr[i] == 1 ) {
				let from10to20 = Number(arr.reverse().join(''));
				res = after_ten[from10to20];
				if (arr.length == 2) {
					return res;
				}
			} else {
			res.push(decades[arr[i]]);
			}
		}
		if ( i == 2 ) {
			res.push(hundreds[arr[i]]);
		}
	}
	console.log(res);
	return res.reverse().join(' ');
}

let num16 = 999;
console.log(makeNumbersToWords(num16));

