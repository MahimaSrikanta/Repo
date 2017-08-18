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

//Accepted
var permute = function(nums) {
  var result =[];
  var temp =[];
  
  
  var helper = function(nums,result, temp, index) {
    if(temp.length === nums.length) {
      result.push(temp.slice(0));
      return;
    } 
    
    for(var i =0;i<nums.length;i++) {
      if(temp.indexOf(nums[i]) !== -1) continue;
      temp.push(nums[i]);
      helper(nums, result,temp);
      temp.pop();
    }
    // temp.push(nums[index]);
    // helper(nums, result,temp,index+1);
    // temp.pop();
    
  }
  helper(nums, result,temp,0)
  return result;
}

permute([1,2,3])