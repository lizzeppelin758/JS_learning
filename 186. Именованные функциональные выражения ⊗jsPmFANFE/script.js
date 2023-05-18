"use strict"; //строгий режим
let test = function func() {
	console.log(func); // функция	выведет свой же исходный код 
};

test(); // вызываем функцию