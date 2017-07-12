/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
 /*
 Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 0,1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */

//accepted
 //move the non zeros far to left and count the number of zeros and append the zeros at the end.
var moveZeroes = function(nums) {

var right =0;
var countZero =0;
var len = nums.length-1;
for(var i =0; i< nums.length; i++) {
  if(nums[i] !== 0) {
    nums[right] = nums[i];
    right ++;
  } else {
    countZero ++;
  }
}
 while(countZero !== 0) {
   nums[len] = 0;
   len--;
   countZero--;
 } 

};

moveZeroes([0,1,0,3,12])