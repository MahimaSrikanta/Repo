/*Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

//accepted , but time limit exceeded for last test

//time = O(n^2)
var threeSum = function(nums) {
  nums.sort(function(a,b) {
    return a-b;
  });
  var hash = {};
  var result =[];
  for(var i =0; i< nums.length; i++) {
      var match = 0-nums[i];
      var j = i+1;
      var k = nums.length-1;
      while(j<k) {
        var sum = nums[j] + nums[k];
        if(sum === match) {
          if(hash[[nums[i], nums[j], nums[k]].join("")] === undefined) {
           result.push([nums[i], nums[j], nums[k]]);
           hash[[nums[i], nums[j], nums[k]].join("")] =1;
          }
           k--;
           j++;
        } else if(sum> match){
          k--;
        }else {
          j++;
        }
      }
    
  }
  return result;
};
