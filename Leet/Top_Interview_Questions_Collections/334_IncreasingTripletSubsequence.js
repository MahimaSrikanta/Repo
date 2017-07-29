/*Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:
Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Your algorithm should run in O(n) time complexity and O(1) space complexity.

Examples:
Given [1, 2, 3, 4, 5],
return true.

Given [5, 6, 3, 2, 1],
return false.
*/


var increasingTriplet = function(nums) {
  
  var min = Infinity;
  var max = Infinity;
  var lenSub = 0;
  
  for(var i =0; i< nums.length; i++) {
    console.log(nums[0])
       if(nums[i] <= min) {  // first get the smallest number of subsequence
         console.log("hi")
         min = nums[i];
       } else if(nums[i] <= max) { // second largest number of subsequence
         max = nums[i];
       }
     else {  // if there exists thrid largest number of sunsequence , then return true
       console.log(min, max)
      return true;
    }
  }
  
  return false;
};


increasingTriplet([1,2,2,1])
