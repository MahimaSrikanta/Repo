/*
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.


Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].


The largest rectangle is shown in the shaded area, which has area = 10 unit.

For example,
Given heights = [2,1,5,6,2,3],
return 10.

*/



var largestRectangleArea = function(heights) {
  var stackheight = []
  var stackindex = [];
  var maxArea = heights[0];
  stackheight.push(heights[0]);
  stackindex.push(0);
  for(var i =1; i<= heights.length; i++) {
    if(stackheight[stackheight.length-1] < heights[i]) {
      stackheight.push(heights[i]);
      stackindex.push(i);
    }
    
    while(stackheight[stackheight.length-1] > heights[i]) {
      var tempHeight = stackheight.pop();
      var tempIndex = stackindex.pop();
      maxArea = Math.max(maxArea,(tempHeight * (i-tempIndex)));
     
    }
    stackheight.push(heights[i]); 
    stackindex.push(i);
  }
  
  return maxArea
  console.log(stackheight)  
};

largestRectangleArea([1,1])