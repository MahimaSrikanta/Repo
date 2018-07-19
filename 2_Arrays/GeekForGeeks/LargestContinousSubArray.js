// Largest Sum Contiguous Subarray
//https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
// {-2, -3, 4, -1, -2, 1, 5, -3}
/*
Logic: Take max and sum variables
loop through the array of numbers.  Add the array[i] to sum and then check if the sum is greater then max , yes then max will be sum and continue, if no then also continue future continous subarray value may add up to sum . But if the array[i] is neagtive then it will not increase the sum value hence we need to reset the sum value to 0.

Time Complexity: O(n)
*/
const MaxSubArray = (array) => {
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      if (sum > max) {
        max = sum
      }
      if (array[i] < 0) {
        sum = 0;
      }
    }
    return max
  }
  
  MaxSubArray([-2, -3, 4, -1, -2, 1, 5, -3])