Using the JavaScript language, have the function LetterCapitalize(str) 
take the str parameter being passed and capitalize the first 
letter of each word. 
Words will be separated by only one space. 



function LetterCapitalize(str){
    var words = str.split(" ");
    
    for(var i = 0; i < words.length; i++){
        words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
    }
    
    return words.join(" ");
    
    
}

LetterCapitalize("star wars should be a good movie");
