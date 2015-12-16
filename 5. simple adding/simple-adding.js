// Using the JavaScript language, have the function SimpleAdding(num) 
// add up all the numbers from 1 to num.
// For the test cases, the parameter num will be any 
// number from 1 to 1000. 



function SimpleAdding(num){
    var answer = 0;
    for(var i = 1; i <= num; i++){
        answer = answer + i;

    }
    return answer;
}


SimpleAdding(4);

// you are going to be going thru numbers, so you need a for loop
// create a varible that will hold the answer! 