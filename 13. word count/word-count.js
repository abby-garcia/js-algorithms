// Using the JavaScript language, have the
//  function WordCount(str) take the str string parameter 
//  being passed and return the number of words the string 
//  contains (ie. "Never eat shredded wheat" would return 4). 
//  Words will be separated by single spaces. 

function WordCount(str){
	return str.split(" ").length;
}

WordCount("Hello it's me.");

//split by spaces
// then count the number of splits