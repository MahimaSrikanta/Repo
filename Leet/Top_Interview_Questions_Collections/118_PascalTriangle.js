/*
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/

//accepted
var generate = function(numRows) {
    if(numRows ===0) {
        return [];
    }
  var counter =[1];
  var result = [];
  result.push(counter);
  
  for(var i =1; i<numRows; i++) {
    var temp  =[];
    temp.push(1) // first 
    for(var j=0; j< counter.length-1; j++) { // --> important to end till length-1 to avoid NAN
      temp.push(counter[j] + counter[j+1]);
    }
    temp.push(1); // last
    //console.log(temp)
    counter = temp;
    result.push(counter);
    
  }
  
 return result 

};