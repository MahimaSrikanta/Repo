/*
Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

Example:

Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
*/

//accepted


/*
1. loop through A and B array and save the difference into hash with count as value
2. loop through C and D array and check if the sum is there in hash , yes, then increase the counter as many times as value
*/

var fourSumCount = function(A, B, C, D) {
  var hash = {};
  for(var i =0; i<A.length; i++) {
    for(var j =0; j<B.length; j++) {
      var diff = (0- (A[i]+ B[j]));
      if(hash[diff] === undefined) {
        hash[diff] =1;
      } else {
        hash[diff]= hash[diff]+1;
      }
    }
  }
  var count =0;
  for(var k =0; k<C.length; k++) {
        for(var l=0; l<D.length; l++) {
           var sum =C[k]+ D[l]; 
           if(hash[sum] !== undefined){
             count += hash[sum];
           }
        }
      }
  return count;
};
