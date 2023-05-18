"use strict"; //строгий режим



// N1 
console.log('task N1');
let date1 = new Date(1998, 2, 1);
let date2 = new Date(2000, 0, 10);
function howManyDays(date1, date2) {
    let dif = (date2.getTime() - date1.getTime())/(1000*60*60*24);
    return dif;
}
console.log(howManyDays(date1,date2));

// N2
let my_birthday = new Date(1996,10,12);
let now_day = new Date();

function howManyMonths(date1, date2) {
    let dif = ((date2.getTime() - date1.getTime())/(1000*60*60*24*30.5)).toFixed(0);
    return dif;
}
console.log(howManyMonths(my_birthday,now_day));







