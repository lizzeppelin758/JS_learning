"use strict"; //строгий режим
// N1 
/**Найдите сумму элементов приведенного объекта. */
let obj1 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
};
let sum1 = 0;

for(let key in obj1) {
	let subObj1 = obj1[key];

	for(let subKey in subObj1) {
		sum1 += subObj1[subKey];
	}
}

console.log(sum1);
// N2
/**Используя циклы, найдите сумму элементов этого объекта. */
let obj2 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
};
let sum2 = 0;
for (let key in obj2) {
	let subObj2 = obj2[key];
	for (let subKey in subObj2) {
		let subsubObj2 = subObj2[subKey];
		for (let subsubKey in subsubObj2) {
			sum2 += subsubObj2[subsubKey];
		}
	}
}
console.log(sum2);
