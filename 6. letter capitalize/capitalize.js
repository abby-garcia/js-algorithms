Using the JavaScript language, have the function LetterCapitalize(str) 
take the str parameter being passed and capitalize the first 
letter of each word. 
Words will be separated by only one space. 


function LetterCapitalize(str){
	return str.replace(/\b[a-z]/gi,function(char){
		return char.toUpperCase();
	});

	for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  }

  // return the array of words joined into a string
  return words.join(" ");
         
}

}

LetterCapitalize("Hello, is it me you're looking for?");


// Things to remember - .toUpperCase