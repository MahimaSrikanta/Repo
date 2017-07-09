/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
*/

// accepted

// Watch tushar roy's video

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.hash = [];
  var sum =0;
  for(var index =0; index < this.nums.length; index++) {
   sum += nums[index];
   this.hash[index] = sum;
  }
  console.log(this.hash)
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if( i ===0) {
      return this.hash[j]
  } else {
      return this.hash[j] - this.hash[i-1];
  }
}