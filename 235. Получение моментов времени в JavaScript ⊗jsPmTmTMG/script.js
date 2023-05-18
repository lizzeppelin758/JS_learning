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

let date1 = new Date(now.getFullYear(), 11, 31);
console.log(weekdays[date1.getDay()]);


// N2 
console.log('task N2');

let date2 = new Date(now.getFullYear(), now.getMonth(), 1);
console.log(weekdays[date2.getDay()]);

// N3
console.log('task N3');

let date3 = new Date(now.getFullYear() + 1, 11, 31);
console.log(weekdays[date3.getDay()]);

// N4 
console.log('task N4');

let date4 = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
console.log(weekdays[date4.getDay()]);

// N5
console.log('task N5');
let date5 = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
console.log(weekdays[date5.getDay()]);
// N6
console.log('task N6');



// N7
console.log('task N7');

let date7 = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
console.log(weekdays[date7.getDay()]);

// N8
console.log('task N8');

let date8_1 = new Date(now.getFullYear(), 0, 1);
let date8_2 = new Date(now.getFullYear(), 10, 8);
let dif8_days = (date8_2 - date8_1)/(1000*60*60*24);
console.log(dif8_days);
// N9 
console.log('task N9');

let date9_1 = new Date(now.getFullYear(), now.getMonth(), 10);
let date9_2 = new Date(now.getFullYear(), now.getMonth(), 20);
let dif9_days = (date9_2 - date9_1)/(1000*60*60*24);
console.log(dif9_days);

// N10
console.log('task N10');

let date10 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
let dif10_hours = Math.floor((now - date10)/(1000*60*60));
console.log(dif10_hours);

// N11 
console.log('task N11');
let date11 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let diff11_hours = Math.floor((now - date11)/(1000*60*60));
console.log(diff11_hours);

// N12 
console.log('task N12');

let date12 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
let dif12_hours = Math.floor((date12 - now)/(1000*60*60));
console.log(dif12_hours);

// N13 
console.log('task N13');


for(let year = 2000; year <= now.getFullYear(); year++) {
    let date13 = new Date(year, 0, 1);
    if(date13.getDay() == 0 || date13.getDay() == 6) {
        console.log('1 января ' + year +' года - выходной');
    }
}



