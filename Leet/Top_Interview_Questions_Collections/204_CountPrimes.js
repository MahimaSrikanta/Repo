/*
Description:

Count the number of prime numbers less than a non-negative number, n
*/

//accepted
var isPrime = function(n) {
  var len = Math.floor(Math.sqrt(n));
  for(var i =2; i<= len; i++) {
    if(n%i === 0) {
      return false;
    }
  }
  return true;
}

var countPrimes = function(n) {
    if(n <= 2) {
        return 0;
    }
  var result =[];
  for(var i =2; i< n; i++) {
    if(isPrime(i)) {
      result.push(i);
    }
  }
  console.log(result)
  return result.length;
};