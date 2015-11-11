Using the JavaScript language, have the 
function AlphabetSoup(str) take the str 
string parameter being passed and return 
the string with the letters in alphabetical order 
(ie. hello becomes ehllo). 
Assume numbers and punctuation
 symbols will not be included in the string. 



function AlphabetSoup(str) { 
  
  // Use .split to turn the string into an array... 
  str = str.split("");
  
  // .sort to alphabatize the new array...
  str = str.sort();
  
  // and .join to turn it back into a string.
  str = str.join("");
  
  // Finally, we return our answer.
  return str;
}

// With Chaining
function AlphabetSoup(str) { 
  return str.split("").sort().join("");
}