"use strict"; //строгий режим

// N1
let elem1 = document.querySelector('#elem1');
elem1.addEventListener('click', () => {
   elem1.textContent += elem1.dataset.text;
});

// N2
let elems2 = document.querySelectorAll('.N1 div');
for(let elem of elems2) {
   elem.addEventListener('click', function writeNum() {
      elem.textContent += elem.dataset.num;
   elem.removeEventListener('click', writeNum);
   });
}

// N3
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let num_clicks = document.querySelector('#num_clicks');
button1.addEventListener('click', function() {
   this.dataset.click = Number(this.dataset.click) + 1;
});
button2.addEventListener('click', function() {
   num_clicks.textContent = button1.dataset.click;
});

// N4
let inp4 = document.querySelector('#elem4');
let message = document.querySelector('#message');
inp4.addEventListener('blur', function() {
   if(inp4.value.length != inp4.dataset.length) {
   message.textContent = 'invalid number of characters'; 
   }
   else {
      message.textContent = ''; 
   }
});

// N5
let inp5 = document.querySelector('#elem5');
let message5 = document.querySelector('#message5');
inp5.addEventListener('blur', function() {
   if(inp5.value.length < inp5.dataset.min || inp5.value.length > inp5.dataset.max) {
   message5.textContent = 'invalid number of characters'; 
   }
   else {
      message5.textContent = ''; 
   }
});

// N6
let elem6 = document.querySelector('#elem6');
elem6.addEventListener('click', function() {
   elem6.textContent += elem6.dataset.productPrice * elem6.dataset.productAmount;
});

// N7
let par7 = document.querySelectorAll('.text7');
for( let i = 0; i < par7.length; i++) {
   par7[i].setAttribute('data-num', i+1);
   console.log(par7[i].getAttribute('data-num'));
}
