"use strict"; //строгий режим

// N1
let parent = document.querySelector('#parent');

let elems1 = parent.querySelectorAll('.www');
for (let elem of elems1) {
   console.log(elem);
}

let elems2 = parent.querySelectorAll('.ggg');
for (let elem of elems2) {
   console.log(elem);
}