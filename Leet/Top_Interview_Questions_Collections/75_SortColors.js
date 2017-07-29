/*
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

click to show follow up.

Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?
*/

var sortColors = function(nums) {
  var r =0;
  var w =0;
  var b =0;
  for(var i =0; i<nums.length; i++) {
    if(nums[i] === 0) {
      r++;
    
    }else if(nums[i] ===1) {
      w++;
    }else {
      b++;
    }
  }

  w= w+r-1;
  b= b+w-1;
 
  for(var j=0; j<nums.length; j++) {
    if(j<r) {
      nums[j] = 0;
    }
    else if(j<= w) {
      nums[j] = 1;

    }
    else  {
      nums[j] = 2;
      console.log(nums)

    }
  }
  return nums;
};

sortColors([0,1,1,0,2,1,2,0])