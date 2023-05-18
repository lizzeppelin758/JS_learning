"use strict"; //строгий режим
// N1 
let arr = [10, 20, 30, 40, 21, 32, 51]; 

for (let elem of arr) {
	console.log(elem);
}

for (let elem of arr) {
	let str_num = String(elem);
	console.log(str_num);
}
let sum = 0;
for (let elem of arr) {
	let str_num = String(elem);
	if (str_num[0] == 1 || str_num[0] == 2)
	{
		console.log(elem);
		sum += elem;
	}
}
console.log(sum);