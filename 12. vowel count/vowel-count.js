// Using the JavaScript language, have the 
// function VowelCount(str) 
// take the str string parameter 
// being passed and return the number 
// of vowels the string contains 
// (ie. "All cows eat grass" would return 5). 
// Do not count y as a vowel for this challenge. 

function VowelCount(str) {
	var counter = 0;
	var vowel = ["a", "e", "i", "o", "u"];

	for(var i = 0; i < str.length; i++){
		if(vowel.indexOf(str[i]) !== -1){
			counter++;
		}
	}

	return counter;

}


VowelCount("Helloooo Amardio");

//review line 14. 