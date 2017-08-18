/*
Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

//Passes most of test cases

var searchRange = function(nums, target) {
  var low = 0;
  var high=nums.length-1;
  var result=[-1, -1];
  if(nums.length ===0) {
    return result;
  }

  // get the left side range value 
  while(low < high) {
    var mid = Math.floor((low+high)/2);
    if(nums[mid] < target) {
      low = mid+1;
    }else {
     high = mid
    }
  }
  
  result[0]=low // left side range value
  high = nums.length-1;
  
  // right baised binary search for right side range value
  while(low <high) {
    mid = Math.floor((low+high)/2) +1;
    if(nums[mid] > target) {
      high = mid-1;
    } else {
      low = mid;
    }
  }
  result[1]=high;
  return result;
};

searchRange([1], 1)