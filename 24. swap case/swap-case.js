

// Using the JavaScript language, have the 
// function SwapCase(str) take the str parameter and 
// swap the case of each character. 
// For example: if str is "Hello World" the output 
// should be hELLO wORLD. Let numbers and symbols stay the 
// way they are. 


function SwapCase(str){
 	var newString= str.split("");

 	for(var i = 0; i < newString.length; i++){
 		if(newString[i] === newString[i].toUpperCase()){
 			newString[i] = newString[i].toLowerCase();
 		}

 		else if (newString[i] === newString[i].toLowerCase()){
 			newString[i] = newString[i].toUpperCase();

 		}


 	}

 	return newString.join("");

}

SwapCase("Hello World");


//swap cases
//what if you made everything lower cases
// and then split it and then make the first index lower case
//and the rest uppercase

//Split everything into individual characters and IF te letter is one way
//make it another way 