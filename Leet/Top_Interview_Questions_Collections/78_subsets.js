/*
Given a set of distinct integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

//not accepted

// some logic needs to be chagned.... gives a extra count




var backtrackHelper = function (nums, temp, finalResult, start) {
  
  finalResult.push(temp.slice(0));
  for(var i =start; i< nums.length; i++) {
      // if(temp.includes(nums[i]))  continue;
      temp.push(nums[i]);
      backtrackHelper(nums, temp, finalResult, start+1);
      temp.pop();
  
  }

}

var subsets = function(nums) {
  var temp = [];
  var finalResult = [];
  backtrackHelper(nums, temp, finalResult, 0)  
  return finalResult
};

subsets([1,2,3])