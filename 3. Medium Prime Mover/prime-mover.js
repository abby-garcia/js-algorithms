Using the JavaScript language, have the function PrimeMover(num) 
return the numth prime number. The range will be from 1 to 10^4. 
For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 




function PrimeMover(num) {
	var place = 0;
	for(var i = 1; i < 10000; i++){
		if(num % i === 0){
			continue;
		}
		else{
			place++;
		}


	}



PrimeMover(num);

//when it is a prime number, brint up the counter
//how do you tell the computer that it is a prime number?





















