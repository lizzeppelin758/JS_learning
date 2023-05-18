"use strict"; //строгий режим
/* N1
Код должен вывести элемент объекта:

let obj = {x: 1, y: 2, z: 3};
console.log(obj[x]);
*/
let obj1 = {x: 1, y: 2, z: 3};
console.log(obj1['x']);

/* N2
Код должен вывести элемент объекта по ключу из переменной:

let obj = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj.key);
*/
let obj2 = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj2[key]);

/*N3
Код должен вывести сумму элементов объекта:

let obj = {x: 1, y: 2, z: 3};
let sum = obj[x] + obj[y] + obj[x];

console.log(obj);
*/
let obj3 = {x: 1, y: 2, z: 3};
let sum = obj3.x + obj3.y + obj3.z;

console.log(sum);
/*N4
Код должен вывести количество элементов объекта:

let obj = {x: 1, y: 2, z: 3};
console.log(obj.length);
*/
let obj4 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj4);
console.log(keys.length);
