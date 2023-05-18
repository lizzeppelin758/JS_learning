"use strict"; //строгий режим
// N1 
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; 
let counter = 0;
for (let elem of arr)
{
	if (elem == 3) {
		counter++;
	}
}

console.log(counter);


// N2 
let counter_3 = 0;
let counter_2 = 0;
for(let elem of arr)
{
	if (elem == 2) {
		counter_2++;
	}
	if (elem == 3) {
		counter_3++;
	}
}
console.log(counter_2, counter_3);