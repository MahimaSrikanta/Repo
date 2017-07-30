/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

//Accepted

//Time complexity O(n) & space complexity O(n)

var findMedianSortedArrays = function(nums1, nums2) {
 //merge two arrays , nums1 and nums2 and then find the median 
 var counter = nums1.length + nums2.length;
 var result =[];
 var left =0;
 var right =0;

 nums1.push(Infinity);
 nums2.push(Infinity);
 for(var k =0; k<counter; k++) {
   if(nums1[left] > nums2[right]) {
     result.push(nums2[right]);
     right++;
   } else {
     result.push(nums1[left]);
     left++;
   }
 }
 console.log(result);
 var mid = Math.floor(result.length/2);
 if(result.length %2 ===0){
   return (result[mid]+result[mid-1])/2;
 }else {
   return result[mid];
 }
};