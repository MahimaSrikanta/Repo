/*
Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].

*/

//sort all the intervals based on start interval and then push to stack and compare if the next interval is overlapping, yes, then pop from stack, updates the end interval and save to stack;

var merge = function(intervals) {
  //sort the array based on starting intervals
  intervals.sort(function(a,b) {
    return a[0] - b[0];
  });
  
  var stack =[];
  stack.push(intervals[0]);
  for(var i =1; i<intervals.length; i++) {
    var temp = stack[stack.length-1]
   if(intervals[i][0] >= temp[0] && intervals[i][0] <= temp[1] && intervals[i][1] > temp[1]){
     // overlapping
     stack.pop();
     temp[1] = intervals[i][1];
     stack.push(temp);
      
   }else {
     stack.push(intervals[i]);
   }
  }
  return stack
};

merge ([[1,3],[2,6],[8,10],[15,18]])