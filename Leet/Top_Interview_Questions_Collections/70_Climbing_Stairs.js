/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.
*/

//Accepted

// the person can reach the last stairs either through (n-1) or (n-2) steps , its a fibonacci series with memoization



var hash = {};
var climbStairs = function(n) {
  
  if(hash[n] !== undefined) {
    return hash[n];
  }
  if(n ===0 || n ===1) {
    return 1;
  }
  
  hash[n] = climbStairs(n-1) + climbStairs(n-2)
  return hash[n]
};