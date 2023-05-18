"use strict"; //строгий режим



// N1 
console.log('task N1');
let date1 = new Date(2000,8,1);
let date2 = new Date(2010,1,15);
function howManyMiliSec(date1, date2) {
    let dif = (date2.getTime() - date1.getTime());
    return dif;
}
console.log(howManyMiliSec(date1,date2));

// N2
let days = (howManyMiliSec(date1, date2)/(1000*60*60*24)).toFixed(0);
console.log(days);

// N3
let months = Math.floor(days/30);
console.log(months);

// N4
let years = Math.floor(months/12);
console.log(years);







