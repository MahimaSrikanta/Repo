var fourSum = function(nums, target) {
  let result =[];
  let hash ={};
  nums = nums.sort((a,b) => {
    return a-b;
  });
  
  for(let i=0; i<nums.length-1; i++){
    for(let l=i+1; l<nums.length-2; l++){
    if ( nums[l] == nums[l - 1] || nums[i] === nums[i-1]) continue;
      let j = l+1;
      let k = nums.length-1;
      while(j< k){
        if(nums[i] + nums[l]+ nums[j] + nums[k]  === target){
          result.push([nums[i],nums[l],nums[j], nums[k]]);
          j++;
         while (j < k && nums[j] === nums[j-1]) j++;
        }else if(nums[i] + nums[l] +nums[j] + nums[k] < target) {
          j++
        }else {
          k--;
        }
      }
    }
  }
  return result
    
};

fourSum([-3,-2,-1,0,0,1,2,3], 0)
