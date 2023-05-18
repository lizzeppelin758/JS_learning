"use strict"; //строгий режим
// N1 
/**С помощью вложенных циклов выведите на экран все строки с данными.*/
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};

for(let num1 in data) {
	for(let day of data[num1]) {
		console.log(day);
	}

}

// N2
/**С помощью вложенных циклов выведите на экран все строки с данными. */
let data2 = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	}
];
for(let obj of data2) {
	for(let num2 in obj) {
		console.log(obj[num2]);
	}
}

// N3
/**С помощью вложенных циклов выведите на экран все строки с данными. */
let data3 = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];

for (let obj of data3) {
	for (let num in obj) {
		for(let day of obj[num])
		console.log(day);
	}
}
