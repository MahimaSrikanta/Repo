/*
Given an array of integers where 1 ? a[i] ? n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

//Accepted . Space = O(n), Time = O(n)

//Need to check for space = O(1)

var findDisappearedNumbers = function(nums) {
  var hash = {}
  var result =[];
  nums.forEach(function(item) {
    if(hash[item] === undefined) {
      hash[item] =1;
    }
  });
  for(var i =1; i<= nums.length; i++) {
    if(hash[i] === undefined) {
      result.push(i);
    }
  }
  return result;
}

//constant space

var missingNumber = function(nums) {
  var result = 0;
  for(var i =0; i< nums.length; i++) {
    result = result ^ (i+1) ^ nums[i];
  }
  return result
};