"use strict"; //строгий режим
// N1 
/**Дана функция:

function func(num = 5) {
	console.log(num * num);
}
Эта функция вызывается следующим образом:

func(2); // 3
func(3); // 9
func(); // 25
Расскажите, каким будет результат каждого из вызовов функции. */
function func1(num = 5) {
	console.log(num * num);
}
func1(2); // 3
func1(3); // 9
func1(); // 25

// N2
/**Дана функция:

function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
Эта функция вызывается следующим образом:

func(2, 3);
func(3);
func();
Расскажите, каким будет результат каждого из вызовов функции. */

function func2(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
func2(2, 3);  // 5
func2(3); // 3
func2(); // 0