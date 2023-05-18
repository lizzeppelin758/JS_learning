"use strict"; //строгий режим

let date = new Date(1996, 10, 12);

// N1 
console.log('task N1');
let day = date.getDay();
console.log(day);
let weekday = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

document.write('<p>День моего рождения - ' + weekday[day] + '</p>');







