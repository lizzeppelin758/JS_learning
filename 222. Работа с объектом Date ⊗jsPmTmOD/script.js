"use strict"; //строгий режим
let date = new Date();


// N1 
console.log('task N1');
console.log(date.getDate());



// N2
console.log('task N2');
console.log(date.getMonth);

// N3
console.log('task N3');
console.log(date.getFullYear());

let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
document.write('<p>Сегодня ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' года</p>');
