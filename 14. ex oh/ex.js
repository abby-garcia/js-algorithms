// Using the JavaScript language, have the function ExOh(str) 
// take the str parameter being passed and return 
// the string true if there is an equal
// number of x's and o's, otherwise return
// the string false. Only these two letters will be entered
// in the string, no punctuation or numbers. 
// For example: if str is "xooxxxxooxo" then the output 
// should return false because there are 6 x's and 5 o's. 


function ExOh(str) {
    var letterX = str.split("x").length;
    var letterO = str.split("o").length;

    if(letterX === letterO){
        return true;
    }
    else{
        return false;
    }
}

ExOh("xxxooo");






function ExOh(str) {
    var letterX = str.split("x").join("");
    var letterO = str.split("o").join("");

    if(letterX.length === letterO.length){
        return true;
    }
    else{
        return false;
    }
}

ExOh("xxxooo");


//return true if there is an even amount of xs and otherwise
// return false if not 