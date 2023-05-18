"use strict"; //строгий режим

// N1
console.log('task N1');
let elem1 = document.querySelector('#elem1');
console.log(elem1.lastChild);
console.log(elem1.lastElementChild);



// N2
console.log('task N2');

let elem2 = document.querySelector('#elem2');
console.log(elem2.nextSibling);
console.log(elem2.nextElementSibling);

// N3
console.log('task N3');

let elem3 = document.querySelector('#elem3');
console.log(elem3.previousSibling);
console.log(elem3.previousElementSibling);


// N4
console.log('task N4');

let elem4 = document.querySelector('#elem4');
for( let elem of elem4.childNodes) {
   console.log(elem);
}

// N5
console.log('task N5');

let elem5 = document.querySelector('#elem5');
for( let elem of elem4.childNodes) {
   console.log(elem.nodeName);
}

// N6
console.log('task N6');

let elem6 = document.querySelector('#elem6');
for( let elem of elem6.childNodes) {
   if(elem.nodeType == 1 || elem.nodeType == 3) {
   console.log(elem);
   }
}

// N7
console.log('task N7');

let elem7 = document.querySelector('#elem7');
for( let elem of elem7.childNodes) {
   console.log(elem.textContent);
}

// N8
console.log('task N8');

let elem8 = document.querySelector('#elem8');
for( let elem of elem8.childNodes) {
   if( elem.nodeType != 1) {
   console.log(elem.data);
   }
}

// N9
console.log('task N9');

let elem9 = document.querySelector('#elem9');
for( let elem of elem9.childNodes) {
   if( elem.nodeType != 8) {
   console.log(elem.textContent);
   }
}

// N10
console.log('task N10');

let elem10 = document.querySelector('#elem10');
for( let elem of elem10.childNodes) {
   
   console.log(elem.textContent + ' ' + elem.nodeName);
   
}