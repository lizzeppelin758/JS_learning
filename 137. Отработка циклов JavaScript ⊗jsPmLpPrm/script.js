"use strict"; //строгий режим
// N1 
console.log('task N1');
for(let i = 1; i <= 100; i++)
{
    console.log(i);
}

// N2
console.log('task N2');
for(let i = 100; i >= 1; i--)
{
    console.log(i);
}

// N3
console.log('task N3');
for ( let i = 1; i <= 100; i++)
{
    if(i % 2 == 0) {
        console.log(i);
    }
}

// N4
console.log('task N4');
let arr4 = [];
for ( let i = 0; i < 10; i++) {
arr4[i] = 'x';
}
console.log(arr4);

// N5
console.log('task N5');
let arr5 = [];
for (let i = 0; i < 10; i++)
{
    arr5[i] = i+1;
}
console.log(arr5);

// N6
console.log('task N6');
let arr6 = [2,6,7,34,5,98,71,24,56,9,3,13,25,41,86,34,6,1,98,18];
for (let elem of arr6) {
    if(elem > 0 && elem <10)
    {
        console.log(elem);
    }
}

// N7
console.log('task N7');
let arr7 = [2,6,7,34,5,98,71,24,56,9,3,13,25,41,86,34,6,1,98,18];
let flag7 = false;
for (let elem of arr7) {
    if( elem === 5) {
        flag7 = true;
        break;
    }
}
if (flag7 = true) {
    console.log('5 is there');
}
else {
    console.log('5 is not there');
}

// N8
console.log('task N8');
let arr8 = [2,6,7,34,5,98,71,24,56,9,3,13,25,41,86,34,6,1,98,18];
let sum8 = 0;
for (let elem of arr8) {
    sum8 += elem;
}
console.log(sum8);


// N9
console.log('task N9');
let arr9 = [2,6,7,3,5,1,9];
let sum9 = 0;
for(let elem of arr9) {
    sum9 += elem**2;
}
console.log(sum9);

// N10
console.log('task N10');
let arr10 = [2,6,7,34,5,98,71,24,56,9,3,13,25,41,86,34,6,1,98,18];
let sum10 = 0;
let count = 0;
for(let elem of arr10) {
    count++;
    sum10 += elem;
}
let mid = sum10 / count;
console.log(mid);

// N11
console.log('task N11');
let num11 = 4;
let fact = 1;
for ( let i = 1; i <= num11; i++)
{
    fact *= i;
}
console.log(fact);

// N12
console.log('task N12');
let i = 10;
let arr12 = [];
while( i>=1 ) {
    arr12[10 - i] = i;
    i--;
}
console.log(arr12);

// N13
console.log('task N13');
let arr13 = [7,3,-1,6,4,-3,0,-1,-3,8,7,-3,-5,7,2,8];
let sum13 = 0;
for (let elem of arr13) {
    if (elem > 0 ) {
        sum13 += elem;
    }
}
console.log(sum13);


// N14
console.log('task N14');
let arr14 = [10, 20, 30, 50, 235, 3000];
for (let elem of arr14) {
    let str_elem = String(elem);
    if(str_elem[0] == 1 || str_elem[0] == 2 || str_elem[0] == 5) {
        console.log(elem);
    }
}

// N15
console.log('task N15');
let arr15 = [2,6,7,3,5,1,9];
for (let i = arr15.length - 1; i >= 0; i--)
{
    console.log(arr15[i]);
}
//N16
console.log('task N16');
let arr16 = [2,6,7,3,5,1,9,7];
for(let i = 0; i <= arr16.length - 1; i++) {
    if(arr16[i] === i) {
        console.log(arr16[i]);
    }
}

//N17
console.log('task N17');
let arr17 = [2,6,7,3,5,1,9,7];
for (let elem of arr17) {
    document.write(elem + '<br>')
}

//N18
console.log('task N18');
let arr18 = [2,6,7,3,5,1,9,7];
for (let elem of arr17) {
    document.write('<p>' + elem + '</p>')
}
//N19, N20
console.log('task N19');
let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let day = 'saturday';
for (let elem of week) {
    if(elem == day) {
        
        if (elem == 'saturday' || elem == 'sunday') {
            document.write('<i><b>' + elem + '</i></b><br>');
        }
        else {
            document.write('<i>' + elem + '</i><br>');
        }
    }
    else if (elem == 'saturday' || elem == 'sunday') {
            document.write('<b>' + elem + '</b><br>');
        }
        else {
        document.write(elem + '<br>');
    }
}
// N20
console.log('task N20');

// N21
console.log('task N21');
let obj21 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let key in obj21) {
    let newpay = obj21[key] * 1.1;
    newpay = newpay.toFixed(0);
    obj21[key] = newpay;
}
console.log(obj21);

// N22
console.log('task N22');
let obj22 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let key in obj22) {
    if(obj22[key] < 400) {
    let newpay = obj22[key] * 1.1;
    newpay = newpay.toFixed(0);
    obj22[key] = newpay;
    }
}
console.log(obj22);
// N23
console.log('task N23');
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj23 = {};
for (let i = 0; i <= arr1.length - 1; i++) {
    obj23[arr1[i]] = arr2[i];
}
console.log(obj23);
// N24
console.log('task N24');
let obj24 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let keysum = 0;
let objsum = 0;
let res;
for (let key in obj24) {
keysum += Number(key);
objsum += obj24[key];
}
res = keysum / objsum;
console.log(res);

// N25
console.log('task N25');
let obj25 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
let keys_arr = [];
let obj_arr = [];
let count24 = 0;
for (let key in obj25) {
    keys_arr[count24] = key;
    obj_arr[count24] = obj25[key];
    count24++;
}
console.log(keys_arr, obj_arr);
// N26
console.log('task N26');
let obj26 = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr26 = [];
let count26 = 0;
for(let key in obj26) {
    let str_obj = String(obj26[key]);
    if(str_obj[0] == 1 || str_obj[0] == 2) {
        arr26[count26] = obj26[key];
        count26++;
    }
}
console.log(arr26);

//N27
console.log('task N27');
let arr27 = ['a', 'b', 'c', 'd', 'e'];
let obj27 = {};
for(let i = 0; i <= arr27.length - 1; i++) {
    obj27[i+1] = arr27[i];
}
console.log(obj27);
// N28
console.log('task N28');
let arr28 = ['a', 'b', 'c', 'd', 'e'];
let obj28 = {};
for(let i = 0; i <= arr28.length - 1; i++) {
    obj28[arr27[i]] = i+1;
}
console.log(obj28);