"use strict"; //строгий режим
/* N1 
Скажите, что выведется в консоль в результате выполнения следующего кода:

let obj = {x: 1, y: 2, z: 3};
delete obj.x;

console.log('x' in obj); // выведет false
*/

let obj = {x: 1, y: 2, z: 3};
delete obj.x;

console.log('x' in obj);