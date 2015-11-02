Using the JavaScript language, have the function FirstReverse(str) take 
the str parameter being passed and return the string in reversed order. 


function FirstReverse(str){
	return(str.split('').reverse().join(''));
};

FirstReverse("Time to turn me around!")




things I need to use:
.reverse();
.split();
,join();