/*Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
   var max = -Infinity;
   var max1 = -Infinity;
   var max2 = -Infinity;
  
    for(var i =0;i<nums.length; i++) {
    if(nums[i] === max || nums[i] ===max1 || nums[i] ===max2) continue; // to overcome with duplicates
      if(nums[i] > max) {
        max2 = max1;
        max1 = max;
        max = nums[i];
      }else if(nums[i] > max1){
        max2= max1;
        max1 = nums[i];
      }else if(nums[i] > max2) {
        max2 = nums[i];
      }
    }
    return max2 === -Infinity ? max: max2  // for array of size less than 3 & when there are duplicates and all unique numbers make less than 3 
  }