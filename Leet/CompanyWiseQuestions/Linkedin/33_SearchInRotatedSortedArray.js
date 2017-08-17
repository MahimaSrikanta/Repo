/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/

//Accepted
//Time O(log n), Space:O(1)

var search = function(nums, target) {
  var l=0 
  var h = nums.length-1;
  
  //first find the smallest number in the array, that is the index from where the rotation starts
  while(l<h) {
    var mid = Math.floor((l+h)/2);
    if(nums[mid] > nums[h]) {
      l= mid+1;
    } else {
      h= mid;
    }
  }
  var rot= l; // the real rotated index
  console.log(rot);
  l=0,h=nums.length-1;

while(l<=h){  //Normal search
  mid = Math.floor((l+h)/2);
  
  var real = (mid+rot)%nums.length
  console.log(mid, real)
  if(nums[real] === target) {
    return real;
    
  } else if(nums[real] < target) {
    l= mid+1;
  } else {
    h= mid-1;
  }
}
    return -1;

};