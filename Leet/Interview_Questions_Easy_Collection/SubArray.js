//Print all sub arrays of an array

function SubArray (arr) {
  var result = [];
for(var k=0; k<arr.length; k++) {
  for(var i =k; i<arr.length; i++) {
    var temp = [];
    for(var j =k; j<=i; j++) {
      temp.push(arr[j])
    }
    result.push(temp)
  }
}
  console.log(result)
} 

SubArray([1,2,3])