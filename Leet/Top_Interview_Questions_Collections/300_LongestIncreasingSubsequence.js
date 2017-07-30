/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(n2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?
*/


//Not accepted, Need to check for bugs

var lengthOfLIS = function(nums) {
  
  var max = 0;
 // nums.push(Infinity)
  for(var i =0; i< nums.length; i++) {
    var counter =0;
    var c =i;
    var j =c+1;
    while(j<nums.length){
      if(nums[c] <= nums[j]) {
        counter++;
        c++;
      }
      
      j++;
    }
    console.log(nums[i], counter)
    if(counter > max) {
      max = counter;
      
    }
  }
  return max
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])