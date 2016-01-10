// You will be given an array of several arrays that each contain integers 
// and your goal is to write a function that will sum up all the numbers in all the arrays. 
// For example, if the input is [[3, 2], [1], [4, 12]] then your program should output 22 
// because 3 + 2 + 1 + 4 + 12 = 22.



function add_arrays(arr){
	var answer = 0;


	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){

			answer += arr[i][j];		
	}
}

	return answer;
}

add_arrays([[3, 2], [1], [4, 12]]);

// you have to do a forloop to get thru the array
// then you need to go thru the inside of the arrays 
// HOW DO YOU ADD EVERYTHING TOGETHER? THINK. 
//console.log shitz

//if you want THREE for loops, make sure you have "k"
// then answer += arr[i][j][k];