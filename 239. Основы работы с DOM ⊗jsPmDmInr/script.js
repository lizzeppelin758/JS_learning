"use strict"; //строгий режим

let now = new Date();
let weekdays = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday'
};

// N1 
console.log('task N1');

let half_day = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);

if(half_day > now) {
    console.log('Полдень еще не наступил');
}
if(half_day == now) {
    console.log('Сейчас полдень');
}
if(half_day < now) {
    console.log('Полдень уже прошел');
}

// N2 
console.log('task N2');

let day15 = new Date(now.getFullYear(), now.getMonth(), 15);

if (now < day15) {
    console.log('Первая половина месяца');
}
if ( now == day15 ) {
    console.log('Сегодня середина месяца');
}
if ( now > day15) {
    console.log('Вторая половина месяца');
}
