"use strict"; //строгий режим

// N1
function func1() {
	this.value = Number(this.value) + 1;
}
let nums = document.querySelectorAll('.num');
for( let num of nums) {
    num.addEventListener('blur', func1);
}


// N2


let par2 = document.querySelectorAll('.par2');
for(let par of par2) {
    par.addEventListener('click', squareNum)
}
function squareNum() {
    this.textContent = Number(this.textContent)**2;
}


