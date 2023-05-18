"use strict"; //строгий режим
let date = new Date();

// N1 
console.log('task N1');
document.write('<p>Сегодня ' + date.getDay() + '-й день недели</p>');

// N2
console.log('task N2');

let weekends = date => (date.getDay()==0 && date.getDay()==1);
/*
function isWeekend(date) {
if(date.getDay() == 0  && date.getDay() == 1) {
    return true;
}
}
*/
if(weekends(date)) {
    document.write('<p>Выходной день</p>');
} else {
    document.write('<p>Рабочий день</p>');
}

// N3
function howLongToSunday(date) {
    let rest_day = 6 - date.getDay();
    let word;
    if( rest_day == 0 && rest_day == 5 && rest_day == 6 ) {
        word = ' дней';
    }
    if( rest_day == 1) {
        word = ' день';
    }
    if(rest_day >= 2 && rest_day <= 4) {
        word = ' дня';
    }
    return rest_day + word;
}

document.write('<p>До воскресенья осталось ' + howLongToSunday(date) + '</p>');






