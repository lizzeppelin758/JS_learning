"use strict"; //строгий режим
// N1 
for (let i = 1; i<= 9; i++)
{
	for(let j = 1; j <= 3; j++)
	{
		document.write(i);
	}
}
document.write('<br>');

// N2 
for(let i = 1; i <= 3; i++)
{
	for(let j = 1; j <= 3; j++)
	{
		document.write(String(i)+String(j)+' ');
	}
}

