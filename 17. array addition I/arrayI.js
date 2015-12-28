Using the JavaScript language, have the function ArrayAdditionI(arr) 
take the array of numbers stored in arr and return 
the string true if any combination of numbers in the 
array can be added up to equal the largest number in the array, 
otherwise return the string false. 
For example: if arr contains [4, 6, 23, 10, 1, 3] 
the output should return true because 4 + 6 + 10 + 3 = 23. 
The array will not be empty, will not contain all the same elements, 
and may contain negative numbers. 

function ArithGeo(arr) {

    var arrDif = [];
    var arrQuo = [];
    var ariFlag = true;
    var geoFlag = true;

    for (var i = 0; i < arr.length - 1; i++) {
      arrDif.push(arr[i + 1] - arr[i]);
      arrQuo.push(arr[i + 1] / arr[i]);
      if (i > 0) {
        if (arrDif[i-1] != arrDif[i]) {
          ariFlag = false;
        }
        if (arrQuo[i-1] != arrQuo[i]) {
          geoFlag = false;
        }
      }
    }

    if (ariFlag) {
        return "Arithmetic";
    } else if (geoFlag) {
        return "Geometric";
    } else {
        return -1;
    }

}