"use strict"; //строгий режим
// N1 

let affairs = {
	'2019-12-28': ['data11', 'data12', 
		'data13'], 
	'2019-12-29': ['data21', 'data22', 
		'data23'], 
	'2019-12-30': ['data31', 'data32', 
		'data33'], 
}


// N2 Добавьте еще одно дело в дату '2019-12-29'.

affairs['2019-12-29'].push('data24');
console.log(affairs['2019-12-29']);

// N3 Добавьте еще два дела в дату '2019-12-31'.
affairs['2019-12-31'] = [];
affairs['2019-12-31'].push('data41','data42');
console.log(affairs['2019-12-31']);

// N4
let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 
			'student113'], 
		'subgroup12': ['student121', 'student122', 
			'student123'], 
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 
			'student213'], 
		'subgroup22': ['student221', 'student222', 
			'student223'], 
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 
			'student313'], 
		'subgroup32': ['student321', 'student322', 
			'student323'], 
	},
};

// N5
students.group1.subgroup11.push('student114');
console.log(students.group1.subgroup11);

//N6
students.group1.subgroup13 = [];

students.group1.subgroup13.push('student115','student116');
console.log(students.group1.subgroup13);

// N7
students.group4 = {};
students.group4.subgroup14 = [];
students.group4.subgroup14.push('student411','student412','student413');
console.log(students.group4.subgroup14);
