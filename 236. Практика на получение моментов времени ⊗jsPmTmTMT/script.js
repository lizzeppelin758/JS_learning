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

let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let diff1_sec = (now - date1)/(1000);
console.log(diff1_sec);


// N2 
console.log('task N2');

let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
let diff2_sec = (date2 - now)/(1000);
console.log(diff2_sec);

// N3
console.log('task N3');

let date3 = new Date(now.getFullYear() + 1, 0, 1);
let diff3_days = (date3 - now)/(1000*60*60*24);
console.log(diff3_days);

// N4 
console.log('task N4');

function howMany13Fri(year) {
let count13Fri = 0;
for(let month = 0; month <= 11; month++) {
    let last_day_month = new Date(year, month + 1, 0);

    for(let day = 1; day <= last_day_month.getDate(); day++) {
        let weekday = new Date(year, month, day);
        if(day == 13 && weekday.getDay() == 5) {
            count13Fri++;
        } 
    } 
}
return count13Fri;
}
console.log(howMany13Fri(now.getFullYear()));

// N5
console.log('task N5');
let date5 = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
console.log(date5.getFullYear());


// N6
console.log('task N6');

let date6 = new Date(now.getFullYear(), now.getMonth() + 1, 0);
console.log(weekdays[date6.getDay()]);


// N7
console.log('task N7');

function isLeapYear(year) {
    let date = new Date(year, 2, 0);

    if(date.getDate() == 29) {
        return true;
    }
    else { return false; }
}

console.log(isLeapYear(now.getFullYear()));

// N8
console.log('task N8');

function prevLeapYear(year) {

    let date = new Date(year, 2, 0);
    if(date.getDate() != 29) { 
        year--;
       return prevLeapYear(year);
    }
    else {
        return year;
    }
}
let last_leap_year = prevLeapYear(now.getFullYear());
console.log(last_leap_year);
// N9 
console.log('task N9');

function nextLeapYear(year) {

    let date = new Date(year, 2, 0);
    if(date.getDate() != 29) { 
        year++;
       return nextLeapYear(year);
    }
    else {
        return year;
    }
}
let next_leap_year = nextLeapYear(now.getFullYear());
console.log(next_leap_year);


