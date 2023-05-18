"use strict"; //строгий режим

// N1
let elem1 = document.querySelector('#elem1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
    elem1.style.height = '200px';
    elem1.style.width = '400px';
    elem1.style.border = '2px solid black';
});

// N2
let elem2 = document.querySelector('#elem2');
let button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
    elem2.style.fontSize = '20px';
    elem2.style.borderTop = '2px solid green';
    elem2.style.backgroundColor = 'beige';
});

// N3
let elem3 = document.querySelectorAll('#elem3 li');
let button3 = document.querySelector('#button3');
button3.addEventListener('click', function() {
    for( let li of elem3) {
    li.style.cssFloat = 'left';
    }
});
