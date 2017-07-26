/*
Count triplets with sum smaller than a given value
Given an array of distinct integers and a sum value. Find count of triplets with sum smaller than given sum value. Expected Time Complexity is O(n2).

Examples:

Input : arr[] = {-2, 0, 1, 3}
        sum = 2.
Output : 2
Explanation :  Below are triplets with sum less than 2
               (-2, 0, 1) and (-2, 0, 3) 

Input : arr[] = {5, 1, 3, 4, 7}
        sum = 12.
Output : 4
Explanation :  Below are triplets with sum less than 4
               (1, 3, 4), (1, 3, 5), (1, 3, 7) and 
               (1, 4, 5)
*/

var bruteforce = function (arr, sum) {
  var result=0;
  for(var i =0;i<arr.length-2; i++) {
    for(var j =i+1; j<=arr.length-1; j++) {
      for(var k =j+1; k<=arr.length; k++) {
        if(arr[j]+arr[i]+arr[k] < sum ) {
        result++;
        }
      }
    }
  }
  return result;
}


bruteforce([5, 1, 3, 4, 7], 12)