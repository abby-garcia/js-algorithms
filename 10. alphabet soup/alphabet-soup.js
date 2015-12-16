// Using the JavaScript language, have the 
// function AlphabetSoup(str) take the str 
// string parameter being passed and return 
// the string with the letters in alphabetical order 
// (ie. hello becomes ehllo). 
// Assume numbers and punctuation
//  symbols will not be included in the string. 



function AlphabetSoup(str){
   var orderedLetter = "";
   orderedLetter = str.split("").sort().join("");
   return orderedLetter;
}

AlphabetSoup("zebras");


//whenever you're asked to out things in alphabetical order, you
// will need to split up the letters, sort them, and then join them
//back together.

