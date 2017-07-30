/*
Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].

*/

//sort all the intervals based on start interval and then push to stack and compare if the next interval is overlapping, yes, then pop from stack, updates the end interval and save to stack;
//Accepted
// Time Complexity : Sort : O(n^2)

function Interval(start, end) {
     this.start = start;
     this.end = end;
 }

var merge = function(intervals) {
  if(intervals.length ===0) {
      return [];
  }
  //sort the array based on starting intervals
  intervals.sort(function(a,b) {
    return a.start - b.start;
  });


 //console.log(intervals)

  var stack =[];
  stack.push(intervals[0]);

  for(var i =1; i<intervals.length; i++) {
    var temp = stack[stack.length-1];

  if((intervals[i].start<= temp.end && intervals[i].end > temp.end) ) {  // if overlapping ?
     // overlapping
     stack.pop();
   
     temp.end = intervals[i].end;
     temp.start = Math.min(intervals[i].start, temp.start)
     stack.push(temp);
      console.log(temp)
      
   }else if(intervals[i].start > temp.end) {  // if not at all overlapping 
     stack.push(intervals[i]);
   }
  }
  return stack
};


var a = new Interval(1,4);
var b = new Interval(2,3);
var c = new Interval(8,10);
var d = new Interval(15,18)
merge([a,b])