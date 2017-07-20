/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

*/
//Accepted
//Time : O(n)



var trap = function(height) {
  var leftMax =height[0];
  var rightMax = height[height.length-1];
  var leftArr = [];
  var rightArr = [];
  var sum =0;
  
  //create left Array
  for(var i =0; i< height.length; i++) {
    leftArr[i] = Math.max(leftMax, height[i]); // Note its Max of the leftmax and the number itself.
    leftMax = leftArr[i]
  }
  
  //create right Array
  for(var j =height.length-1; j>=0; j--) {
    rightArr[j] = Math.max(rightMax, height[j]);
    rightMax = rightArr[j]
  }
  
  // find the difference between the height element and min of (left and right Array) thats the level of water getting stored
  for(var k =0; k< height.length; k++) {
    sum += Math.min(leftArr[k], rightArr[k]) - height[k]
  }
  return sum
};