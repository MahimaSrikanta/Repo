/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

// Not accepted, some stupid problem

var missingNumber = function(nums) {
  var sum =0;
  var len =  nums[nums.length-1];
  var sum1 =0;
  for(var i =0; i<= len; i++) {
    sum += i;
  }
  //console.log(sum)
  for(var j =0; j < nums.length; j++) {
    sum1 += nums[j];
  }
  return sum -sum1
};

missingNumber([0, 1, 3, 4, 5])