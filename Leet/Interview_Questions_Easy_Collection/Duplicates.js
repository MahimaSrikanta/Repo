var removeDuplicates = function(nums) {
  var duplicateIndex =[];
  var flag= false;
  for(var i =0, j=1; i<nums.length; i++, j++) {
    if(nums[i] === nums[j]) {
        duplicateIndex.push(j);
    }
  }
    
  for(var k =duplicateIndex.length-1; k>=0; k--) {  
    
        nums.splice(duplicateIndex[k],1);
    
  }
  //console.log(nums)
 return nums.length 
}

removeDuplicates([1,1,1])