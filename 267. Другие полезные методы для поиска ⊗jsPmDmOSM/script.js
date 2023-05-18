"use strict"; //строгий режим

// N1
let elem1 = document.getElementById('elem1');
elem1.textContent = 'Some text';

// N2
let elem2 = document.getElementsByTagName('li');
for(let elem of elem2) {
elem.classList.add('colored');
}

// N3
let elem3 = document.getElementsByClassName('www');

 for(let elem of elem3) {
    elem.classList.add('colored');
 }

