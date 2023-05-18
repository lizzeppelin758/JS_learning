"use strict"; //строгий режим

// N1
let points1 = document.querySelectorAll('ul.N1 li');
for( let point of points1) {
    point.addEventListener('click', function incValue() {
        this.textContent ++;
    });
}

// N2
let points2 = document.querySelectorAll('ul.N2 li');
for( let point of points2) {
    point.addEventListener('click', function incValueOneTime() {
        this.textContent ++;
        this.removeEventListener('click',incValueOneTime);
    });
}

// N3

let points3 = document.querySelectorAll('ul.N3 li');
for( let point of points3) {
    point.addEventListener('click', function incValueOneTime() {
        this.textContent ++;
        if(this.textContent >= 10) {
        this.removeEventListener('click',incValueOneTime);
        }
    });
}



