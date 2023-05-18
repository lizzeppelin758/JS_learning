"use strict"; //строгий режим
// N1 
console.log('task N1');
let capital = 'moscow';
let Capital = capital.slice(0,1).toUpperCase() + capital.slice(1);
console.log(Capital);

// N2
console.log('task N2');
let city = 'omsk';
let City = city.slice(0,2).toUpperCase() + city.slice(2);
console.log(City);

// N3
console.log('task N3');
let str = 'London';
let mini_str = str.slice(0,1).toLowerCase() + str.slice(1);
console.log(mini_str);

// N4
console.log('task N4');
let str4 = 'word1 word2 word3';
let words = str4.split(' ');
for(let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
}
let new_str4 = words.join(' ');
console.log(new_str4);

// N5
console.log('task N5');
let str5 = 'var_test_text';
let text = str5.split('_');
for( let i = 0; i < text.length; i++) {
    
    text[i] = text[i].slice(0,1).toUpperCase() + text[i].slice(1);
}
let new_str5 = text.join('');
console.log(new_str5);

// N6
console.log('task N6');
let str6 = 'var_test_text';
let text6 = str6.split('_');
for( let i = 0; i < text6.length; i++) {
    if(i == 0) {
        text6[i] = text6[i].slice(0,1).toLowerCase() + text6[i].slice(1);
    } else {
    text6[i] = text6[i].slice(0,1).toUpperCase() + text6[i].slice(1);
    }
}
let new_str6 = text6.join('');
console.log(new_str6);

// N7
console.log('task N7');
let str7 = 'слова переставим сейчас';
let res = str7.split(' ').reverse().join(' ');
console.log(res);


