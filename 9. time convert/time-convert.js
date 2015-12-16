Using the JavaScript language, 
have the function TimeConvert(num) take the 
num parameter being passed and return the 
number of hours and minutes the parameter 
converts to (ie. if num = 63 then the output should be 1:3). 
Separate the number of hours and minutes with a colon. 


function TimeConvert(num){
	var hour = Math.floor(num/60);
	var minutes = (num % 60);
	var finalTime = hour + ":" + minutes;



	return finalTime;


}

TimeConvert(63);


// have this set up - hour + ":" + minutes
//find a way to make hours = 60 mins
// 1:3 <-- 1 hour and 3 minutes
//math.floor - returns largest interger less than given number