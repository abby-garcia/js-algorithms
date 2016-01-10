You will be given 2 parameters: a low number, and high number. Your goal is to print all numbers between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.

// function sortNumbers(a,b){
// 		return a - b;
// 	}






function divisiblyByThree(num1,num2){

	//question is: how in the world do you print out ALL the numbers in between two numbers?
	//answer: you use this: for(var i = num1; i <= num2; i++)

	for(var i = num1; i <= num2; i++){
		if(i % 3 === 0){
			console.log(i + " div3");
		}
		else{
			console.log(i);
		}
	}
}


divisiblyByThree(30,50);

//put in numbers in order
//print all the numbers in between 
//see if the numbers are divisisble by 3
// if yes, print num + "div3" after number
// if not, just print number

//print all the numbers BETWEEN low and high!!!!!!!
