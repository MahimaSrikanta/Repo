var searchInsert = function(nums, target) {
  

  let left =0;
  let right = nums.length-1;
  let mid =0;
  
  while(left < right){
    mid = Math.ceil((left +right)/2);
    if(nums[mid] === target ){
      return mid;
    }else if(nums[mid]< target){
      left = mid+1;
    }else {
      right = mid-1;
    }
    if(left === right){
      if(nums[left] < target){
        return left+1;
      }else {
        return left;
      }
    }

  }
  return mid
 
};