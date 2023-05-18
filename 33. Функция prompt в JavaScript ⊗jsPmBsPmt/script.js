"use strict"; //строгий режим
//N1
let your_name = prompt('Ваше имя?');
alert(`Ваше имя ${your_name}`);

//N2
let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));
alert(`Сумма: ${num1 + num2}`); 

//N3
let w_square=Number(prompt('Введите длину стороны квадрата'));
let S_square= w_square**2;
alert(`Площадь квадрата равна ${S_square}`);

//N4
let w_rectangle = Number(prompt('Введите ширину прямоугольника'));
let h_rectangle = Number(prompt('Введите длину прямоугольника'));
let P_rectangle = 2*w_rectangle + 2*h_rectangle;
alert(`Периметр прямоугольника равен ${P_rectangle}`);
