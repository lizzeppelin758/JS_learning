"use strict"; //строгий режим

// N1


// N2
let elem2 = document.querySelector('#elem2');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
button1.addEventListener('click', function() {
    elem2.classList.add('decoration');
});

button2.addEventListener('click', function() {
    elem2.classList.add('letter_style');
});

button3.addEventListener('click', function() {
    elem2.classList.add('colored');
});

// N3
let elem3 = document.querySelector('#elem3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');
let button6 = document.querySelector('#button6');
button4.addEventListener('click', function() {
    elem3.classList.toggle('decoration');
});
button5.addEventListener('click', function() {
    elem3.classList.toggle('letter_style');
});

button6.addEventListener('click', function () {
        elem3.classList.toggle('colored');
    });