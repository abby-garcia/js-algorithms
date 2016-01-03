Using the JavaScript language, have the function PrimeTime(num) take the num 
parameter being passed and return the string true if the parameter 
is a prime number, otherwise return the string false. The range will be 
between 1 and 2^16. 


function PrimeTime(num){

	if(num === 1){
		return false;  //prime numbers are GREATER than 1. 
	}
	for(var i = 2; i < num; i++){
		if(num % i === 0){
			return false;   // if the number is divided by something and has no reminder, then it isn't a prime. 
		}

		return true;
	}


}

PrimeTime(num);


// true if prime
// false is not prime
//prime numbers are GREATER than 1. 


