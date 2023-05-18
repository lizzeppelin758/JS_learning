"use strict"; //строгий режим
// N1 
let str = 'Съешь же ещё этих мягких французских булок да выпей чаю'; 
let count = {};
for (let elem of str)
{
	if (count[elem] == undefined) {
		count[elem] = 1;
	}
	else {
		count[elem]++;
	}
}

console.log(count);

