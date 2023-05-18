"use strict"; //строгий режим

// N1
let elem1 = document.querySelector('#elem1');
let length1 = elem1.classList.length;
console.log(length1);

// N2
let elem2 = document.querySelector('#elem2');
let classNames = elem2.classList;
for( let className of classNames) {
    document.write(className + '<br>');
}

// N3
let elem3 = document.querySelector('#elem3');
elem3.classList.add('xxx');
console.log(elem3);

// N4
let elem4 = document.querySelector('#elem4');
elem4.classList.remove('www', 'zzz');
console.log(elem4);

// N5
let elem5 = document.querySelector('#elem5');
console.log(elem5.classList.contains('ggg'));

// N6
let elem6 = document.querySelector('#elem6');
elem6.classList.toggle('www');
console.log(elem6);




