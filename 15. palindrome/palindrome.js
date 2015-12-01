
function Palindrome(str) {

    str = str.replace(/[\s]/g, "");

   
    strRev = str.split("").reverse().join("");

   
    return str == strRev;
}



    return str.replace(/[\s]/g, "").toLowerCase() == str.replace(/[\s]/g, "").toLowerCase().split("").reverse().join("");
}
