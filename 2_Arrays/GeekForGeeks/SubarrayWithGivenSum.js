// Subarray with given sum
// sum = 12 , array :[2,4,1,0,7,5,3,10]


const subArraySum = (arr, value) => {
    let sum =0;
    let startPtr =0, endPtr =0;
  
    for(let i =0; i<arr.length; i++){
       sum +=arr[i];
       if(sum > value){
         sum =arr[i];
         startPtr = i;
       }else if(sum === value){
         return( [startPtr-1 , i]);
       }
    }
  }
  
  subArraySum([2,4,1,0,7,5,3,10], 12)