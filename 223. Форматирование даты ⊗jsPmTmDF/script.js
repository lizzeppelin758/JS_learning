"use strict"; //строгий режим
let date = new Date();
function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}


// N1 
console.log('task N1');
console.log(
    addZero(date.getHours()) + ':' +
    addZero(date.getMinutes()) + ':' +
    addZero(date.getSeconds()) + ' ' +
    addZero(date.getDate()) + '.' + 
    addZero(date.getMonth()+1) + '.' +
    date.getFullYear()
    );





let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
document.write('<p>Сегодня ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' года</p>');
