"use strict"; //строгий режим
// N1 
let arr1 = [[1, 2, 3], [4, 5], [6]];
let sum1 = 0;
for (let subArr of arr1) {
	for (let elem of subArr) {
		sum1 += elem;
	}
}
console.log(sum1);

// N2
let arr2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum2 = 0;
for (let subArr of arr2) {
	for (let subsubArr of subArr) {
		for(let elem of subsubArr) {
			sum2 += elem;
		}
	}
}
console.log(sum2);
// N3
let arr13 = [[1, 2, 3], [4, 5], [6]];
let arr23 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum13 = 0, sum23 = 0;
for(let i = 0; i < arr13.length; i++) {
	for (let j = 0; j < arr13[i].length; j++) {
		sum13 += arr13[i][j];
	}
}
for(let i = 0; i < arr23.length; i++) {
	for (let j = 0; j < arr23[i].length; j++) {
		for (let k = 0; k < arr23[i][j].length; k++){
			sum23 += arr23[i][j][k];
		}
	}
}
console.log(sum13,sum23);


