/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 //accepted
var merge = function(nums1, m, nums2, n) {
   var i = m-1;
   var j =n-1;
   var last = m+n-1;
   while(i >= 0 && j>= 0) {
     if(nums1[i] >= nums2[j]) {
       nums1[last] = nums1[i];
       i--;
       last--;
     } else {
       nums1[last] = nums2[j];
       j--;
       last--;
     }
     
   }
    while(j>=0) {  // add the left over from nums2 to the nums1 
        nums1[last]= nums2[j];
        j--;
        last--;
    }
   //return nums1
};