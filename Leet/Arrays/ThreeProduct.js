//Given an integer array, find three numbers whose product is maximum and output the maximum product
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort(function(a,b) {
    return a-b;
  })
  return Math.max((nums[nums.length-3] * nums[nums.length-2]* nums[nums.length-1]), nums[0]*nums[1]*nums[nums.length-1]);
};