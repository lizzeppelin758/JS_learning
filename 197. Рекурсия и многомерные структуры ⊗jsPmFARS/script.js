"use strict"; //строгий режим


// N1 
console.log('task N1');
let obj1 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
function getPrimitivesObj(obj) {
	for(let key in obj) {
		if(typeof obj[key] == 'object') {
			getPrimitivesObj(obj[key]);
		}
		else {
			console.log(key + ':' + obj[key]);
		}
	}
}
getPrimitivesObj(obj1);


// N2
console.log('task N2');
let arr2 = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let newArr = [];
function makeOneDimensionArr(arr, oneArr) {
	
	for(let elem of arr) {
		if( typeof elem == 'object') {
			//console.log(elem);
			makeOneDimensionArr(elem, oneArr);
			
		}
		else{
		oneArr.push(elem);
		}
	}
	return oneArr;
}
console.log(makeOneDimensionArr(arr2, newArr));

function makeOneDimensionArr2(arr) {
	let result = [];
	for(let elem of arr) {
		if( typeof elem == 'object') {

		//result.push(...makeOneDimensionArr2(elem));
		// or
		result = result.concat(makeOneDimensionArr2(elem));	
		}
		else{
		
		result.push(elem);
		}
	}
	return result;
}
console.log(makeOneDimensionArr2(arr2));


// N3
console.log('task N3');
function getSumObj(obj) {
	let sum = 0;

	for( let key in obj) {
		if(typeof obj[key] == 'object') {
			sum += getSumObj(obj[key]);
		}
		else {
			sum += obj[key];
		}
	}
	return sum;
}
let obj3 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
console.log(getSumObj(obj3));


/** Проследим выполнение по шагам
 *  1-й примитив объекта:
 * а: 1 попадает в ветвь else, рекурсии нет, в sum записывается 1
 * b: {c: 2, d: 3, e: 4} попадает в ветвь if, в sum (первая вызванная внутренняя функция порождает свою переменную sum, в первый момент равную нулю, независимую от sum во внешней, которая является искомой) записывается результат выполнения рекурсии с аргументом {c: 2, d: 3, e: 4}. внутри функции цикл выполняется 4 раза, каждый элемент попадает в ветвь else, накапливается sum = 9. 
 * управление передается во внешнюю функцию, в sum записывается += 9 из переменной внутренней функции. (во внешней функции переменная в данный момент sum = 1).
 * f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}} попадает в ветвь if. в sum (переменная порождена второй вызванной функцией и изначально равна 0). g:5, j:6 попадают в ветвь else, накапливается sum = 11. k: {l: 7, m: {n: 8, o: 9}} попадает в ветвь if, появляется еще одна sum = 0. l: 7 попадает в else, накапливается sum = 7. m: {n: 8, o: 9} попадает в if, еще раз вызывается рекурсия, появляется еще одна sum=0. n: 8, o: 9 обрабатываются функцией, попадают в else, накапливается sum = 17.
 * выполнение возвращается на "этаж" выше, sum = 17 прибавляется к sum = 7. 
 * затем еще на "этаж" выше, накопленная sum = 24 прибавляется к sum = 11, получается 35.
 * затем sum = 35 прибавляется к sum = 10.
 * в результате обработки массива возвращается sum = 45.
 */


// N4
let arr4 = ['a', ['b', 'c', 'd'], ['e', 'f', 
['g', ['j', 'k']]]] ;
function convertArrToStr(arr) {
	let str = '';
	for(let elem of arr) {
		if( typeof elem == 'object') {

			str += convertArrToStr(elem);
			
		}
		else{

		str += elem;
		}
	}
	return str;
}
console.log(convertArrToStr(arr4));

// N5
let arr5 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function isSquareArr(arr) {
	for( let i = 0; i < arr.length; i++) {
		if(typeof arr[i] == 'object') {
			arr[i] = isSquareArr(arr[i]);
		}
		else {
			arr[i] = arr[i]**2;
		}
	}
	return arr;
}

console.log(isSquareArr(arr5));
