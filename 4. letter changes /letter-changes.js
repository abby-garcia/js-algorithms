Using the JavaScript language, 
have the function LetterChanges(str) 
take the str parameter being passed 
and modify it using the following
algorithm. 
Replace every letter in the string with the letter
following it in the alphabet (ie. c becomes d, z becomes a).
Then capitalize every vowel in this new string (a, e, i, o, u) 
and finally return this modified string. 


function LetterChanges(str){








}



LetterChanges("Hello, I am going to change dramatically.")


// Things to note:
// .fromCharCode() - converts unicode values into characters
// .charCodeAt - returnes the unicode of the character at the specified index in a string
// .toUpperCase() - converts strings to uppercase