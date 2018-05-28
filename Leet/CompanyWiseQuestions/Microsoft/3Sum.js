var threeSum = function(nums) {
  let result =[];
  let hash ={};
  nums = nums.sort((a,b) => {
    return a-b;
  });
  
  for(let i=0; i<nums.length-1; i++){
        // Never let i refer to the same value twice to avoid duplicates
    if (i != 0 && nums[i] == nums[i - 1]) continue;
      let j = i+1;
      let k = nums.length-1;
      while(j< k){
        if(nums[i] + nums[j] + nums[k] === 0){
          result.push([nums[i], nums[j], nums[k]]);
          j++;
          // Never let j refer to the same value twice (in an output) to avoid duplicates
          while (j < k && nums[j] === nums[j-1]) j++;
        }else if(nums[i] + nums[j] + nums[k] < 0) {
          j++
        }else {
          k--;
        }
      }

  }
  return result
    
};