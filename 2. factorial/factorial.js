Using the JavaScript language, have the function FirstFactorial(num) 
take the num parameter being passed and return 
the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). 
For the test cases, the range will be between 1 and 18. 


function FirstFactorial(num) {
	function factorial(n) {                         
		if(n === 0){
			return 1;
		}
		else{
			return factorial(n-1) * n;
		}
	}	

		return factorial(num);
	}
	

FirstFactorial(4);






Things to think about: 
When dealing with factorials, thinks recursions. 
Also think of the following three:
T - Termination Condition - use this to prevent infinite recursions
B - Base Case - this statement stops the recursions
R - Recursion case - the is where the recursion actually happens. 
