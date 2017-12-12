'use strict'


var fs = require("fs");
var elem = 5694136;
fs.writeFile("spec.txt", "")

console.log("cdfc")
var i = 0;

for(var f = 1; f < 51; f++){
	var fileContent = fs.readFileSync(f + ".json", "utf8");
	 var array = fileContent.split(',');
	 for(var i = 0; i < array.length; i++){
	 	array[i] = +array[i];
	 }
	var inerpolCurr = 0;
	var binaryCurr = 0;
	fs.appendFileSync("spec.txt", "\nArray №: "  + f + "  bin: " + binarySearch(array, elem) + "  int: " + interpolSearch(array, elem) )

}



function interpolSearch(array, elem){
	
	var mid;
	var	low =  0;
	var  high = array.length-1;

	while (array[low] < elem && array[high] > elem){

    	inerpolCurr +=1;
		mid = low + Math.floor(((elem - array[low]) * (high - low)) / (array[high] - array[low]));
	    if(array[mid] < elem) {
	    	low = mid +1
	    }
		else 
			if (array[mid] > elem){ 
				high = mid - 1 
		    }
			else {
			 	return inerpolCurr
			}
		}

	if (array[low] == elem){return inerpolCurr}
	else if (array[high] == elem){return inerpolCurr}
	     else {return -1;}
	    
}


function binarySearch(array, elem){

	var mid;
	var	low =  0;
	var  high = array.length-1;

	while(low < high){

	    binaryCurr += 1;
		mid = Math.floor((low+high)/2);
		if (elem == array[mid]){
			return binaryCurr;
		}
		else {
			   if ( elem < array[mid]){
					high = mid;
				}
				else {
					low = mid + 1;
				}
			}
	}

    return -1;
}





/*function mergesort(array){
	var leftArray = [];
	var rightArray = [];
	if (array.length <= 1){
		return array
	}
	else {
		var mid = array.length/2;

		for (var m = 0; m < mid; m++){
			leftArray.push(array.shift())
		}
		
		rightArray = array;	

		var result = merge(mergesort(leftArray), mergesort(rightArray));
		return result
	}
}


function merge(leftArray, rightArray){

	var result = [];

	while(leftArray.length > 0 && rightArray.length > 0){
		if (leftArray[0] < rightArray[0]){
			result.push(leftArray.shift());			
		}
		else {
			result.push(rightArray.shift());			
		}
	}

	while (leftArray.length)
        result.push(leftArray.shift());
 
    while (rightArray.length)
        result.push(rightArray.shift());
 
	return result
}
*/
 

//For generation of arrays in files

// for(var f = 1; f < 50; f++){

// 	var array = [];
// 	for(var i = 0; i < Math.pow(10,6); i++){
// 		array.push(Math.floor(Math.random()*Math.pow(10,7)))
// 	}

// 	fs.writeFile(f + ".json", mergesort(array), function(error){
 
//                 if(error) throw error; 
//                 console.log("Асинхронная запись файла завершена. Содержимое файла:");
//                 var data = fs.readFileSync("", "utf8");
//                 console.log(data);  
// 	});
// }