"use strict"; //строгий режим

// N1
console.log('task N1');
let inp1 = document.querySelector('.N1 input');
let par1 = document.querySelector('.N1 p');
inp1.addEventListener('blur', function() {
   par1.textContent += this.value;
});



// N2
console.log('task N2');
let inp2 = document.querySelectorAll('.N2 input');
let par2 = document.querySelector('.N2 p');
let button2 = document.querySelector('.N2 button');
button2.addEventListener('click', function() {
   let sum = 0;
   for( let inp of inp2) {
      sum += Number(inp.value);
   }
   par2.textContent += sum;
});

// N3
console.log('task N3');
let inp3 = document.querySelector('.N3 input');
let par3 = document.querySelector('.N3 p');
inp3.addEventListener('blur', function() {
   par3.textContent += getSum(inp3.value);
});
inp3.addEventListener('focus', function () {
   par3.textContent = null;
});

function getSum(inp_value) {
   let sum = 0;
   for( let symb of inp_value) {
      sum += Number(symb);
   }
   return sum;
}


// N4
console.log('task N4');
let inp4 = document.querySelector('.N4 input');
let par4 = document.querySelector('.N4 p');
inp4.addEventListener('blur', function() {
   let str = this.value.split(',').join('');
   par4.textContent += getSum(str)/str.length;
});
inp4.addEventListener('focus', function () {
   par4.textContent = null;
});

// N5
console.log('task N5');
let inp5 = document.querySelectorAll('.N5 input');
inp5[0].addEventListener('blur', function() {
   let fullname_array = this.value.split(' ');
   inp5[1].value = fullname_array[0];
   inp5[2].value = fullname_array[1];
   inp5[3].value = fullname_array[2];
})
// N6
console.log('task N6');
function setUpperFirstLetter(str) {
   return str.slice(0,1).toUpperCase() + str.slice(1);
}
let inp6 = document.querySelector('.N6 input');
inp6.addEventListener('blur', function() {
   let fullname_arr = this.value.split(' ');
   this.value = null;
   console.log(fullname_arr);
   for( let i = 0; i < fullname_arr.length; i++) {
      this.value += setUpperFirstLetter(fullname_arr[i]) + ' ';
   }

});

// N7
console.log('task N7');
let inp7 = document.querySelector('.N7 input');
let par7 = document.querySelector('.N7 p');
inp7.addEventListener('focus', function() {
   par7.textContent = null;
});
inp7.addEventListener('blur', function() {
   let words_arr = this.value.split(' ');
   par7.textContent += words_arr.length;
});
// N8
console.log('task N8');
let inp8 = document.querySelector('.N8 input');
inp8.addEventListener('blur', function() {
   this.value = this.value.split('.').reverse().join('-');
});


// N9
console.log('task N9');
let inp9 = document.querySelector('.N9 input');
let par9 = document.querySelector('.N9 p');
let button9 = document.querySelector('.N9 button');
button9.addEventListener('click', function() {
   let reversWord = inp9.value.split('').reverse().join('');
   console.log(reversWord);
   if(inp9.value === reversWord) {
      par9.textContent = 'Yes, it is!';
   } else {
      par9.textContent = 'No, it is not!';
   }
});


// N10
console.log('task N10');
let inp10 = document.querySelector('.N10 input');
inp10.addEventListener('blur', function() {
   
});