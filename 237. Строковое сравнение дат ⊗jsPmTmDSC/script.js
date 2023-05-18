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

let date1_1 = '2020-11-31';
let date2_1 = '2020-12-01';

if(date1_1 > date2_1) {
    console.log('date1_1 > date2_1');
}
else {
    console.log('date2_1 > date1_1');
}


// N2 
console.log('task N2');

let date1_2 = '09-21';
let date2_2 = '09-23';
if(date1_2 > date2_2) {
    console.log('date1_2 > date2_2');
}
else {
    console.log('date2_2 > date1_2');
}

// N3
console.log('task N3');

let date3 = '05-06';
if( (date3 >= '01-01' && date3 <= '02-29') || (date3 >= '12-01' && date3 <= '12-31')) {
    console.log('winter');
}
if(date3 >= '03-01' && date3 <= '05-31') {
    console.log('spring');
}
if( date3 >= '06-01' && date3 <= '08-31') {
    console.log('summer');
}
if( date3 >= '09-01' && date3 <= '11-30') {
    console.log('autumn');
}
