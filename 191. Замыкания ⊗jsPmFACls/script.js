"use strict"; //строгий режим
// N1 
console.log('task N1');
function plusCount() {
	let num = 1;
	return function() {
		console.log(num);
		num++;
	};
}
let count1 = plusCount();
count1();
count1();
count1();

let count2 = plusCount();
count2();
count2();
count2();

// N2
console.log('taskN2');
function decrement() {
	let num = 10;
	return function() {
		console.log(num);
		num--;
	};
}

let number = decrement();
number();
number();
number();

// N3
console.log('task N3');
function from10to0() {
	let num = 10;
	return function() {
		
		if (num > 0) {
		console.log(num);
		num--; }
		else {
			console.log('The end of count.')
		}

		
	};
}
let number2 = from10to0();
number2();
number2();
number2();
number2();
number2();
number2();
number2();
number2();
number2();
number2();
number2();
number2();
number2();
number2();
number2();
number2();
number2();

// N4
//Определите, не запуская код, что выведется в консоль:
console.log('task N4');
function func4() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

func4()(); // 0
func4()(); // 0
func4()(); // 0

// N5
console.log('task N5');
function func5() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

let test5 = func5;

test5()(); //0
test5()(); //0
test5()(); //0

//N6
console.log('task N6');
let counter6 = 0;
		
function test6() {
	return function() {
		console.log(counter6);
		counter6++;
	};
}

let func6 = test6;

let func16 = func6();
let func26 = func6();
func16(); // 0
func26(); // 1
func16(); // 2
func26(); // 3
// переменная counter6 глобальная, каждый новый вызов функции test6() ссылается на одну и ту же переменную и изменяет ее зависимо от предыдущих вызовов

// N7
console.log('task N7');
function test7() {
	let counter7 = 0;
	
	return function() {
		return function() {
			console.log(counter7);
			counter7++;
		};
	};
}

let func7 = test7()();
let func17 = func7;
let func27 = func7;
func17(); // 0
func27(); // 0
func17(); // 1
func27(); // 1

/* переменная counter7 является локальной для test7() и переменной внешней функции для test7()() и test7()()(). Функция test7()() присваивается в переменную func7, и func7 теперь принадлежит лексическое окружение test7()(). так как func17 и func27 ссылаются на одну и туже переменную func7, то они обе имеют общее лексическое окружение и меняют переменную counter7 зависимо, последовательно. */

// N8
console.log('task N8');
function test8() {
	let counter8 = 0;
	
	return function() {
		return function() {
			console.log(counter8);
			counter8++;
		};
	};
}

let func8 = test8();

let func18 = func8();
let func28 = func8();
func18();
func28();
func18();
func28();
/* здесь происходит то же, что и в задаче №7, только вложенные функции вызываются по очереди. func8 вызывает первую вложенную функцию, переменные func18 и func28  - вторую вложенную функцию. вызов первой вложенной функции в переменной func8 присваивает себе лексическое окружение вызванной функции, то есть считает внешней переменной counter8. вызовы второй вложенной функции, хоть и делаются в разных переменных, оба ссылаются на вызов первой вложенной функции и наследуют от неё одно и то же лексическое окружение. */

/* Вывод: новое лексическое окружение создается только при очередном непосредственном вызове исходной функции, в данном случае test7() и test8() */