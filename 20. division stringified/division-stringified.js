Using the JavaScript language, have the 
function DivisionStringified(num1,num2) 
take both parameters being passed, divide num1 by num2, 
and return the result as a string with properly formatted 
commas. If an answer is only 3 digits long, 
return the number with no commas (ie. 2 / 3 should output "1"). 
For example: if num1 is 123456789 and num2 is 10000 the 
output should be "12,346". 

function DivisionStringified(num1,num2){
	var division = num1/num2;
	var divisionString = division.toString();




	if(divisionString.length <= 3){
		return divisionString;

	}

	else(divisionString.length > 4){
		//split number up and add a coma to it and then join it

	}


}

DivisionStringified(num1,num2);


// to change something to a string, you need .toString()