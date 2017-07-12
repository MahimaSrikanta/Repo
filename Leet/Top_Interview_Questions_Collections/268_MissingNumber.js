
/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

//Accepted


// XOR is used here the idea is that num1 ^ num2 ^ num1 === num2. As num1 ^ num1 = 0
/*
Input	Output
A	B
0	0	0
0	1	1
1	0	1
1	1	0
*/
var missingNumber = function(nums) {
  var result = 0;
  for(var i =0; i< nums.length; i++) {
    result = result ^ (i+1) ^ nums[i];
  }
  return result
};

missingNumber([1])