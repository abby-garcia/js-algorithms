// Using the JavaScript language, have the function SimpleSymbols(str) 
// take the str parameter being passed and determine if 
// it is an acceptable sequence by either returning the 
// string true or false. The str parameter will be 
// composed of + and = symbols with several letters 
// between them (ie. ++d+===+c++==a) and for the string 
// to be true each letter must be surrounded by a + symbol. 
// So the string to the left would be false. The string will 
// not be empty and will have at least one letter. 


// you have to do a for loop to go thru the string 
//then you have to figure out what is next to it and the right of it 
// i -1  & i + 1






function SimpleSymbols(str) {
    for(var i = 0; i < str.length; i++){
        if(str[i + 1] !== "+" || str[i - 1] !== "+"){
            return false;
        }
        else{
            return true;
        }
    }
}


SimpleSymbols("++d+===+c++==+a+");