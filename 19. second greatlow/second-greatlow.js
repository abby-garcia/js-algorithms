
// Using the JavaScript language, have the function SecondGreatLow(arr) 
// take the array of numbers stored in arr and return the second 
// lowest and second greatest numbers, respectively, separated by a space. 
// For example: if arr contains [7, 7, 12, 98, 106] the output should be 
// 12 98. The array will not be empty and will contain at least 2 numbers. 
// It can get tricky if there's just two numbers! 


function SecondGreatLow(arr){

	arr = arr.sort(function(a, b) {return a - b;});

	for(var i = arr.length - 1; i > 0; i--){
		if(arr[i] == arr[i-1]){
			arr.splice(i,1); //array.splice(index, howMany)
		}
	}

	if (arr.length > 2) {
        return arr[1] + " " + arr[arr.length - 2];
    } else if (arr.length == 2) {
        return arr[1] + " " + arr[0];
    } else {
        return arr[0] + " " + arr[0];
    }
	
}


SecondGreatLow([7, 7, 12, 98, 106]);


//things we learned: .sort() can only be used for the alphabet 
//use the following: arr = arr.sort(function(a, b) {return a - b;});

//we have to loop and make sure there are no REPEATS!!! 


