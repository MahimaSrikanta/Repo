// Count triplets with sum smaller than a given value

/*
Logic: 
  // sort the array
  // loop through array and fix the first pointer i to arr[i]
  //keep another two pointer j next to i and k at the end of array
  // check if the sum of all the values pointed by the pointers is smaller value. if yes --> Add the result count with all the number  of combinations in the array between j and k i.e (k-j)
         // No --> (sum is greater or equal to given value) 

  Time Complexity : sorting (worst O(n^2)) , On^2
*/

const SumTriplets = function(array, value) {
    let result =0;
    array.sort((a,b) => a-b); // ascending order
    for(let i =0; i<array.length; i++){
      let j = i+1;
      let k = array.length-1;
      while(j < k){
        let sum = array[i] + array[j] + array[k];
         if(sum >= value){
          k--;
        }else {
          result +=(k-j)
          j++;
        }
      }
    }
    return result;
    
  }
  
  SumTriplets([-2,0,1,3], 2);
  