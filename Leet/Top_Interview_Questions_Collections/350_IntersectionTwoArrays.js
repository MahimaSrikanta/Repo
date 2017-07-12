/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

//Accepted , Time complexity : O(n), space : O(n)

var intersect = function(nums1, nums2) {
    //take hashObj
    // loop through nums1 and store the numbers as letters and values as count of occurances
    // loop through nums2 and cheeck which are all the letters appears in hash and push it into array;
    
    var hash ={};
    var result= [];
    for(var i =0; i< nums1.length; i++) {
      if(hash[nums1[i]] !== undefined) {
         hash[nums1[i]] ++;
      }else {
        hash[nums1 [i]] = 1;
      }
    }
   
    for(var j =0; j<nums2.length; j++) {
      if(hash[nums2[j]] !== undefined && hash[nums2[j]] > 0) {
        result.push(nums2[j]);
        hash[nums2[j]]--;
      }
    }
    return result
};

intersect([1, 2, 2, 1], [2, 2])