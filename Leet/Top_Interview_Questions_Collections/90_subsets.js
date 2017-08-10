/*

Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/


var backtrackHelper = function (nums, temp, finalResult, start) {
  
  finalResult.push(temp.slice(0));
  for(var i =start; i< nums.length; i++) {
      if(i > start && nums[i] === nums[i-1])  continue;
      temp.push(nums[i]);
      backtrackHelper(nums, temp, finalResult, start= start+1);
      temp.pop();
  
  }
 return finalResult;
}

var subsets = function(nums) {
  var temp = [];
  var finalResult = [];
  nums.sort(function(a,b) {
    return a-b;
  })
  return backtrackHelper(nums, temp, finalResult, 0)  
};

subsets([1,2,2])