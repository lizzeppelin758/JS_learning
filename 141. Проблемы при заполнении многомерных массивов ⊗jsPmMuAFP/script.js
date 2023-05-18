"use strict"; //строгий режим
// N1 
/** Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/
let arr1 = [];

for (let i = 0; i < 3; i++) {
	arr1[i] = []
	for (let j = 1; j <= 5; j++) {
		arr1[i].push(j);
	}
}
console.log(arr1);
// N2
/**Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = '';
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */
let arr2 = [];

for (let i = 0; i < 3; i++) {
	arr2[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr2[i].push(j);
	}
}

console.log(arr2);
// N3
/** Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/
let arr3 = [];

for (let i = 0; i < 3; i++) {
	arr3[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr3[i].push(j);
	}
}

console.log(arr3);

// N4
/**Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[j] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */
let arr4 = [];

for (let i = 0; i < 3; i++) {
	arr4[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr4[i].push(j);
	}
}

console.log(arr4);

// N5
/** Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/
let arr5 = [];

for (let i = 0; i < 3; i++) {
	arr5[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr5[i].push(j);
	}
}

console.log(arr5);

// N6
/** Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr.push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/
let arr6 = [];

for (let i = 0; i < 3; i++) {
	arr6[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr6[i].push(j);
	}
}

console.log(arr6);
