/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/


//Accepted

// Kadane’s Algorithm:

/*
Initialize:
    max_so_far = nums[0]
    max_ending_here = nums[0]

Loop for each element of the array from index 1   --> important 
  (a) max_ending_here = max_ending_here + a[i]
  (b) if(max_ending_here < nums[i])  --> [No need to keep the sum of previous numbers, 
                                         when their total sum is less than current element. 
                                         drop their sum and make the current element as max ending]
            max_ending_here = nums[i]
  (c) if(max_so_far < max_ending_here)
            max_so_far = max_ending_here
return max_so_far
https://www.youtube.com/watch?v=OexQs_cYgAQ
*/

var maxSubArray = function(nums) {
  var maxSoFar = nums[0];
  var maxEnding = nums[0];
  
  for(var i =1; i< nums.length; i++) {
    maxEnding = maxEnding + nums[i];
    if(maxEnding < nums[i]) {
      maxEnding =nums[i];
    }
    if(maxEnding > maxSoFar) {
      maxSoFar = maxEnding;
    }
  }
  return maxSoFar;
};