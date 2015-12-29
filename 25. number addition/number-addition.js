// Using the JavaScript language, have the function NumberSearch(str) 
// take the str parameter, search for all the numbers in 
// the string, add them together, then return that final number. 
// For example: if str is "88Hello 3World!" the output should be 91. 
// You will have to differentiate between single digit numbers and 
// multiple digit numbers like in the example above. 
// So "55Hello" and "5Hello 5" should return two different answers. 
// Each string will contain at least one letter or symbol. 
function NumberSearch(str){
	str = str.split(/[a-zA-Z]/); // this takes out all of the letters
	var sum = 0; // 

	//now go thru what you have left. 

	for(var i = 0; i < str.length; i++){
		if (str[i] !== ""){ // if it isn't equal to an empty string, then we know it's a numer!
			sum = sum + parseInt(str[i]); //parseInt converts from string to number

		}

	}


	return sum;

}

NumberSearch("5Hello 5");

//take out all of the letters in the equation