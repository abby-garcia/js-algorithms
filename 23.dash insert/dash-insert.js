// Using the JavaScript language, 
// have the function DashInsert(str) 
// insert dashes ('-') between each two odd numbers in str. 
// For example: if str is 454793 the output should be 
// 4547-9-3. Don't count zero as an odd number. 


function DashInsert(str){
	str = str.split("");
	for(var i = 0; i < str.lenght; i++){
		if(str[i - 1] % 2 !== 0 &&  str[i + 1] % 2 !== 0 ){
			str[i] = str[i]+ "-";
		}

	}

}


DashInsert("454793");

// you can ask if the left or right side is dividable by 2, skip it. 
// if the left AND right have a reminder, then you str[i] 
