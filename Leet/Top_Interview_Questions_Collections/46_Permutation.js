/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/


//accepted


var backtrackHelper = function (nums, temp, finalResult) {
  
  //base case
  if(temp.length === nums.length) {
    finalResult.push(temp.slice(0))   // why do we need to add the slice ? Need to check
    return temp;
  }
  
  for(var i =0; i< nums.length; i++) {
    if(temp.includes(nums[i])) continue;
    else {
      temp.push(nums[i]);
      backtrackHelper(nums, temp, finalResult);
      temp.pop();
    }
  }
 return finalResult;
}

var permute = function(nums) {
  var temp = [];
  var finalResult = [];
  
  return backtrackHelper(nums, temp, finalResult)  
};