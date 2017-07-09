/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 /*
 Can we do this in O(1) space and in O(n) time? The following solution does.

Assuming we are given {1,2,3,4,5,6} and order 2. The basic idea is:

1. Divide the array two parts: 1,2,3,4 and 5, 6
2. Reverse first part: 4,3,2,1,5,6
3. Reverse second part: 4,3,2,1,6,5
4. Reverse the whole array: 5,6,1,2,3,4
 */
//accepted
 var reverse = (nums, start, end) => {
  while(start < end) {
    var temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
  return nums;
 }
var rotate = function(nums, k) {
  if(nums === null || nums.length ===0 || k<0) {
  	return null;
  }
  k = k%nums.length; // for k value grater than length, wrap around

  var index = nums.length-k;
  reverse(nums,0, index-1); //reverse first half
  reverse(nums, index, nums.length-1); //reverse second half
  reverse(nums, 0, nums.length-1) //reverse the whole array
  return nums
};

rotate([1,2,3,4,5,6], 3)
