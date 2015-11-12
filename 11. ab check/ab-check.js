Using the JavaScript language, 
have the function ABCheck(str)
take the str parameter being 
passed and return the string 
true if the characters a and b 
are separated by exactly 3 places
anywhere in the string at least once
(ie. "lane borrowed" would result 
in true because there is exactly 
three characters between a and b). 
Otherwise return the string false. 





// Step By Step
function ABCheck(str) {

    // First, we declare two regex expressions to match if a and b ever occur three characters apart.
    // Note that . is a "wildcard" metacharacter in regex that matches almost any character.
    var testOne = /a...b/;
    var testTwo = /b...a/;

    // Next, we use the test method in conjunction with the regex expressions to see if our string contains any matching characters
    var aThenB = testOne.test(str);
    var bThenA = testTwo.test(str);

    // Finally, we return our answer
    return aThenB || bThenA;
}

// Best Practices
function ABCheck(str) {

    return (/a...b/).test(str) || (/b...a/).test(str);
}