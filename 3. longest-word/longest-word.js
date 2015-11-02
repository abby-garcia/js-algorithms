Using the JavaScript language, have the function LongestWord(sen) 
take the sen parameter being passed and return 
the largest word in the string. If there are two or
 more words that are the same length, return the first 
 word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 


function LongestWord(sen){
	var rules = sen.match(/[a-z0-9]+/gi);       // you need to set the rules of what you're looking for first
	var sorted = rules.sort(function(a,b) {      // then you need to think of how to want it sorted. 
		return b.length - a.length;
	});     
		return sorted[0];
}

LongestWord("What is the longgggestttttttttt word here?");