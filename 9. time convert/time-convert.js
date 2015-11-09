Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 



// With step by step instructions
function TimeConvert(num) {
    
    // First, we divide our number by 60 and then use math.floor to "round down" and get the number of hours.
    // Note that Math.floor returns the nearest whole integer less than or equal to the input number.
    var hours = Math.floor(num / 60);
    
    // Next, we use the modulus operator to figure out the number of minutes (the remainder of num/60). 
    // For instance, 125 % 60 would return 5.
    var minutes = num % 60;
    
    // Finally, we return our answer as a string with ":" inserted between the hours and minutes.
    return hours + ":" + minutes;
}

// Without comments
function TimeConvert(num) {

    return Math.floor(num / 60) + ":" + num % 60;
}