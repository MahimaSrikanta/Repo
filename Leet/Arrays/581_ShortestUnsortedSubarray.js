/*Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.

*/

//Approach 1
//Not accepted

var findUnsortedSubarray = function(nums) {
  var start = null;
  var end=null;
  var pivot =0;
  for(var i =1; i< nums.length; i++){
    if(nums[i] < nums[i-1]) {
      if(start === null) {
        start = i-1;
      } else {
        end = i;
      }
    } 
  }
  return start === null ? 0 : end-start+1;
};

//
var findUnsortedSubarray = function(nums) {
  var start = null;
  var end=null;
  var max=0;
  var min =Infinity;
  for(var i =1, j =nums.length-1; i< nums.length; i++,j--){
    if(nums[i] < nums[i-1]) {
      if(start === null) {
        start = i-1;
      }
    }
    console.log(nums[j])
    if(nums[j] < nums[j-1]){
      max = Math.max(max,j)
      end =max;
    }
    
  }
  console.log(start,end)
  return start === null ? 0 : end-start+1;
};


//accepted
//Using Sort
var findUnsortedSubarray = function(nums) {
  var tempArray = nums.slice(0);
  var start =0;
  var end = nums.length;
  tempArray.sort(function(a,b) {
    return a-b;
  });
  
  while(start < nums.length && nums[start] === tempArray[start]) {
    start++;
  }
  
  while(end >=0 && nums[end] === tempArray[end]) {
    end--;
  }
  return end-start+1 <0 ? 0: end-start+1;  // for sorted array, it goes -ve number, hence needs this check
};