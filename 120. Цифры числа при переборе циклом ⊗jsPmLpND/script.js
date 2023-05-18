"use strict"; //строгий режим
// N1 

for(let i = 10; i <= 1000; i++)
{
	let str1 = String(i);
	console.log(str1[0]);

}

// N2 

for(let i = 10; i <= 1000; i++)
{ 
	let str2 = String(i);
	console.log(Number(str2[0]) + Number(str2[1]));
}


//N3

for(let i = 10; i <= 1000; i++)
{
	let str3 = String(i);
	if(str3[0] == 1)
	{
		console.log(i);
	}
}

// N4

for(let i = 10; i <= 1000; i++)
{
	let str4 = String(i);
	if (Number(str4[0]) + Number(str4[1]) == 5)
	{
		console.log(i);
	}
}


