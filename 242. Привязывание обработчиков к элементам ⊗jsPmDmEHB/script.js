"use strict"; //строгий режим

let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
    document.write('<p>1</p>');
});

let button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
    document.write('<p>2</p>');
});

let button3 = document.querySelector('#button3');
button3.addEventListener('click', function() {
    document.write('<p>3</p>');
});
