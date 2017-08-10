/*
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
    */
  
  var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b) {
      return a-b;
    });
  
    var sum = 0;
    
    for(var i =0; i< nums.length; i++) {
      var j = i+1;
      var k = nums.length-1;
      
      while(j<k) {
         sum = nums[i]+nums[j]+nums[k];
        if(sum === target) {
          return sum;
        }else if (sum < target){
          j++;
        }else {
          k--;
        }
      }
    }
    return sum
    
};

threeSumClosest([-1,2,1,-4], 1)