
/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

*/

//Not accepted passed 172 test /199  

//same binary search with small tweeks

var search = function(nums, target) {
    var left = 0;
  var right = nums.length-1;
 
  
  while(left<=right) {
    var mid = Math.ceil((left+right)/2);
    //console.log("ehllo",left, right)
    if(nums[mid] === target) {
      return mid
    }else if(nums[left] <= nums[mid]) {
      
      if(target > nums[mid] && target <= nums[right]) {
        
        left = mid+1;
       // console.log(left)
      } else {
        right = mid-1;
      }
      
    } else  {
      
      if(target > nums[mid] && target <= nums[right]) {
        left = mid +1;
      } else {
        right = mid -1;
      }
    }
      
    }
    return -1;
};