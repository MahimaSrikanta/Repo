/**
 * @param {number[]} nums
 * @return {number}
 */
 
 //Time: 30 min 
 //Accepted , need to further optimize this answer
var removeDuplicates = function(nums) {
  var duplicateIndex = [];
  for(var i =0, j=1; i<nums.length; i++, j++) {
    if(nums[i] === nums[j]) {
      duplicateIndex.push(j)
    }
  }
  for(var k =duplicateIndex.length-1; k>=0 ; k--){
    nums.splice(duplicateIndex[k],1);
  }
 return nums.length;
};
removeDuplicates([1,1,2,2,2,3])