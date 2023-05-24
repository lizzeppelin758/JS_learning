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
let par10 = document.querySelector('.N10 p');
inp10.addEventListener('focus', function() {
   par10.textContent = null;
});
inp10.addEventListener('blur', function() {
   let inpArr = this.value.split('');
   if(inpArr.includes('3')) {
      par10.textContent += '3 is there';
   }
   else {
      par10.textContent += '3 is not there';
   }
});


// N11
let par11 = document.querySelectorAll('.N11 p');
let button11 = document.querySelector('.N11 button');
button11.addEventListener('click', function() {
   for( let i = 0; i < par11.length; i++) {
      par11[i].textContent += i;
   }
});


// N12
let links12 = document.querySelectorAll('.N12 a');
for(let link of links12) {
   link.textContent += ' ' + link.href;
}

// N13
let links13 = document.querySelectorAll('.N13 a');
for(let link of links13) {
   if(link.href.startsWith('http://')) {
      link.textContent += ' ' + link.href;
   }
}

// N14
let par14 = document.querySelectorAll('.N14 p');
for(let par of par14) {
   par.addEventListener('click',function() {
      par.textContent = Number(par.textContent) **2;
   });
}

// N15
let weekdays = { 0: 'sunday',
   1: 'monday',
   2: 'tuesday',
   3: 'wednesday',
   4: 'thursday',
   5: 'friday',
   6: 'saturday'
};
let inp15 = document.querySelector('.N15 input');
let par15 = document.querySelector('.N15 p');
inp15.addEventListener('blur', function() {
   let rightDateFormat = inp15.value.split('.').reverse().join('-');
   console.log(rightDateFormat);
   let date = new Date(Date.parse(rightDateFormat));
   par15.textContent = weekdays[date.getDay()];
})

// N16
let inp16 = document.querySelector('.N16 input');
let inc_button = document.querySelector('#inc');
let dec_button = document.querySelector('#dec');
inc_button.addEventListener('click', function() {
   inp16.value++;
});
dec_button.addEventListener('click', function() {
   if( inp16.value > 0) {
      inp16.value--;
   }
});

// N17
let inp17 = document.querySelector('.N17 input');
let par17 = document.querySelectorAll('.N17 p');
for( let par of par17) {
   par.addEventListener('click', function() {
      inp17.value++;
   });
}

// N18
let text_blocks = document.querySelectorAll('.N18 div');
for( let block of text_blocks) {
   let str = block.textContent;
   if( str.length > 10) {
      block.textContent = str.substring(0,10) + '...';
   }
   else {
      block.textContent = str +'...';
   }
}

// N19
let inp19 = document.querySelector('.N19 input');
inp19.addEventListener('blur', function() {
   if(inp19.value >= 1 && inp19.value <= 100) {
      inp19.classList.add('colored_right');
   } else {
      inp19.classList.add('colored_wrong');
   }
});

// N20
function getRandomInt(min, max) {
	let rand = Math.random();
	return Math.floor(rand * (max - min + 1)) + min;

}
let inp20 = document.querySelector('.N20 input');
let button20 = document.querySelector('.N20 button');
button20.addEventListener('click', function() {
   let str = '';
   for(let i = 0; i < 8; i++) {
      str += getRandomInt(0,9);
   }
   inp20.value = str;
});

// N20 
let inp21 = document.querySelector('.N21 input');
let button21 = document.querySelector('.N21 button');
button21.addEventListener('click', function() {
   let source_str = inp21.value;
   console.log(source_str);
   let new_str = '';
   let order_index = [];
   for(let i = 0; i < source_str.length; i++) {
      let next_symbol_number = getRandomPosition(source_str);
        while (order_index.includes(next_symbol_number)) {
            next_symbol_number = getRandomPosition(source_str);
         }
         new_str += source_str[next_symbol_number];
         console.log(new_str);
         order_index.push(next_symbol_number);
   }
   
   inp21.value = new_str;
});
function getRandomPosition(str) {
   return getRandomInt(0, str.length - 1);
}


// N22
let inp22 = document.querySelector('.N22 input');
let button22 = document.querySelector('.N22 button');
let par22 = document.querySelector('.N22 p');
button22.addEventListener('click', function() {
   par22.textContent = ((Number(inp22.value) -32)*5/9).toFixed(1);
});

// N23
let inp23 = document.querySelector('.N23 input');
let button23 = document.querySelector('.N23 button');
let par23 = document.querySelector('.N23 p');
button23.addEventListener('click', function() {
   let factorial = 1;
   for( let i = 1; i <= inp23.value; i++) {
      factorial *= i;
   } 
   par23.textContent = factorial;
});

// N24
let inp24 = document.querySelectorAll('.N24 input');
let button24 = document.querySelector('.N24 button');
let par24 = document.querySelector('.N24 p');

button24.addEventListener('click', function() {
   let a = Number(inp24[0].value);
   let b = Number(inp24[1].value);
   let c = Number(inp24[2].value);
   
let D = b**2 - 4*a*c;
let root1 = ((-b + Math.sqrt(D))/(2*a)).toFixed(2);
let root2 = ((-b - Math.sqrt(D))/(2*a)).toFixed(2);
par24.textContent = root1 + ', ' + root2;
});
