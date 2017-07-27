/*Your company built an in-house calendar tool called HiCal. 
You want to add a feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting. 
In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime.
These integers represent the number of 30-minute blocks past 9:00am.
*/



const meetings = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
]

//   [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]

var mergeMeeting = function () {
  var result =[];
  meetings.sort(function (a,b) {
    return a.startTime - b.startTime
  });
 // loop through Array
 for(var i =0; i< meetings.length-1; i++) {
   if(meetings[i+1].startTime <= meetings[i].endTime && meetings[i+1].endTime > meetings[i].endTime) {
     result.push({startTime:meetings[i].startTime, endTime: meetings[i+1].endTime });
     i++;
   } else {
     result.push({startTime:meetings[i].startTime, endTime: meetings[i].endTime });
   }
 }
 return result
 
}

mergeMeeting();