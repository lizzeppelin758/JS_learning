"use strict"; //строгий режим


// N1 
console.log('task N1');
/*
function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	let position   = employee[3];
	let salary     = employee[4];
}

func( ['John', 'Smit', 'development', 
	'programmer', 2000] ); 
*/

function func1([name,surname,department,position,salary]) {
	console.log(name);
	console.log(surname);
	console.log(department);
	console.log(position);
	console.log(salary);
}
func1( ['John', 'Smit', 'development', 
'programmer', 2000] );

// N2
console.log('task N2');
/*
function func(employee) {
	let name     = employee[0];
	let surname  = employee[1];
	let info     = employee[2];
}

func( ['John', 'Smit', 'development', 'programmer', 2000] ); 
*/
function func2([name,surname,info = 'no info']) {
	console.log(name);
	console.log(surname);
	console.log(info);
}
func2( ['John', 'Smit', 'development', 'programmer', 2000] ); 

// N3
console.log('task N3');
/*
function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	
	let position;
	if (arr[3] !== undefined) {
		position = arr[3];
	} else {
		position = 'джуниор';
	}
}

func( ['John', 'Smit', 'development'] );
*/

function func3([name,surname,department,position = 'джуниор']) {
	console.log(name);
	console.log(surname);
	console.log(department);
	console.log(position);

}
func3( ['John', 'Smit', 'development'] );

// N4
console.log('task N4');
/*
function func(department, employee, 
	hired) { 
	let name     = employee[0];
	let surname  = employee[1];
	
	let year  = hired[0];
	let month = hired[1];
	let day   = hired[2];
}

func( 'development', ['John', 'Smit'], 
	[2018, 12, 31] ); 
*/
function func4(department, [name, surname], [year, month, day]) {
	console.log(department);
	console.log(name);
	console.log(surname);
	console.log(year + '.' + month + '.' + day);

}
func4('development', ['John', 'Smit'], 
[2018, 12, 31] );

// N5
console.log('task N5');
/*
function func(options) {
	let color  = options.color;
	let width  = options.width;
	let height = options.height;
}

func( {color: 'red', width: 400, 
	height: 500} ); 
*/

function func5({color, width, height}) {
	console.log(color);
	console.log(width);
	console.log(height);
}

func5({color: 'red', width: 400, 
height: 500});

// N6
console.log('task N6');
/*
function func(options) {
	let width  = options.width;
	let height = options.height;
	
	let color;
	if (options.color !== undefined) {
		color = options.color;
	} else {
		color = 'black';
	}
}

func( {color: 'red', width: 400, 
	height: 500} ); 
*/
function func6({color = 'black', width, height}) {
	console.log(color);
	console.log(width);
	console.log(height);
}
func6({ width: 400, 
height: 500});