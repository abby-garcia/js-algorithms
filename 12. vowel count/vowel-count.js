Using the JavaScript language, have the 
function VowelCount(str) 
take the str string parameter 
being passed and return the number 
of vowels the string contains 
(ie. "All cows eat grass" would return 5). 
Do not count y as a vowel for this challenge. 


function VowelCount(str) { 
  var vowels = "aeiouAEIOU";
  var count = 0;
  // code goes here 
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) != -1) {
      count += 1;
    }
  }
  return count;       
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(VowelCount(readline())); 