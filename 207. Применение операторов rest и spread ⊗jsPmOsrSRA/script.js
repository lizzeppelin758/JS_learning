"use strict"; //строгий режим


// N1 
console.log('task N1');
function getArithMean(...nums) {
    let sum = 0;
    for(let num of nums) {
        sum += num;
    }
    return sum/nums.length;
}
let result1 = getArithMean(4,5,6,7,8,9,10,11,12);
console.log(result1);
