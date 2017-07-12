

/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
*/


var firstUniqChar = function(s) {
  // hashMap
  // loop through s and store letters as key and value as count and index.
  // loop throgh hashMap check which key has the count ==1 and store its index as min 
  // return min 
  
  //Accepted

  var min = Infinity;
  var hash = {};
  s.split("").forEach(function(letter, index) {
    if(hash[letter] === undefined) {
      hash[letter] = [1, index];
    }else {
      hash[letter][0]++;
    }
  });
   
  for(var key in hash) {
    if(hash[key][0] ===1 && hash[key][1] <= min) {
      min = hash[key][1];
    }
  }
  
  return min !== Infinity ? min : -1;  
};