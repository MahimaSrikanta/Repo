//Reverse an Array using recursion

var helper = function (arr, result){
   //base case
   if(arr.length !== 1) {
     helper(arr.slice(1), result);
   }
   result.push(arr[0]);
   return result;
}
var recursion = function (arr) {
  var result=[];
  return helper(arr,result )
   
}


recursion([1,2,3,4])

//second approach

//Reverse an Array using recursion
var helper = function (arr, left,right){
  console.log(left, right)
   //base case
   if (left <= right) {
     var temp = arr[left];
     arr[left] = arr[right];
     arr[right] = temp;
     return helper(arr, left+1, right-1)
   }
   
}
var recursion = function (arr) {
  var result=[];
   helper(arr,0,arr.length-1 )
   return arr;
   
}