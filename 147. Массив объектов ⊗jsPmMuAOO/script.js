"use strict"; //строгий режим
// N1 
/**Выведите на экран данные каждого работника в формате имя - зарплата.*/
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for(let worker of employees) {
	console.log(worker.name + ' ' + worker.salary);

}

// N2
/**Выведите на экран сумму зарплат всех работников. */
let sum_salary = 0;
for(let worker of employees) {
	sum_salary += worker.salary;
}
console.log(sum_salary);
// N3
/**Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет. */
let employees3 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let sum3 = 0;
for (let worker of employees3) {
	if( worker.age >= 30) {
		sum3 += worker.salary;
	}
}
console.log(sum3);