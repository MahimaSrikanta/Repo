/*
Fibonacci Recursive(Top-Down)
Time complexity O(2^n)
*/

var fibo = function (n) {
  if(n <=1) {
    return 1;
  }
  return (fibo(n-1) + fibo(n-2))
}

fibo(5)

/*
Fibonacci Recursive(Top-Down) with Memoization
Time Complexity O(n)
*/
var hash = {}
var fibo = function (n) {
  if(hash[n] !== undefined ) {
    return hash[n];
  }
  if(n <=1) {
    return 1;
  }
 hash[n]= (fibo(n-1) + fibo(n-2))
 return hash[n]
}

fibo(5)
