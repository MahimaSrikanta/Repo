
/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Example 1:
Input:s1 = "ab" s2 = "eidbaooo"
Output:True
Explanation: s2 contains one permutation of s1 ("ba").
*/
//initial attemp // not accepted

var checkInclusion = function(s1, s2) {
  var hash = {}
  var count =0;
  for(var i =0; i< s1.length; i++) {
    if(hash[s1[i]] === undefined) {
      hash[s1[i]] =i;
    } 
  }
  for(var j=0; j < s2.length; j++) {
    if(hash[s2[j]] !== undefined) {
      count++;
    }

  }
  return count > 1 ? true :false;
};

//accepted 

// In order to check if a string  s1 contains the letters of s2 and also permuation, 
//store the values in hashtable and make a sliding window of length s1 and run on the s2
//such that entering value is ++ and leaving value is --, which gets over writteb as the window slides
// also keep checking if anytime all the values in hash becomes 0 , if yes then return true

//example

//"ab", "eidbaooo"
//{a:1, b:1 , e:-1, i:-1} => first for loop
//{a:1, b:1, e:0, i:-1, d:-1} ==> second loop first iteration 
//Time : O(n^2)

var checkInclusion = function(s1, s2) {
  
  var checkAllZeroes = function () {
    for(var key in hash){
      if(hash[key] !== 0) {
        return false;
      }
    }
    return true;
  }
  var hash = {}
  var count =0;
  for(var i =0; i< s1.length; i++) {
    if(hash[s1[i]] === undefined) {
       hash[s1[i]] = 1;
    } else {
       hash[s1[i]]++;
    }
    if(hash[s2[i]] === undefined) {
       hash[s2[i]] = -1;
    } else {
       hash[s2[i]]--;
    }
    
  }
  if (checkAllZeroes()) return true;
  for(var j= s1.length; j < s2.length; j++) {
    if(hash[s2[j]] === undefined ) {
      hash[s2[j]]=-1;
    } else {
       hash[s2[j]]--;
    }
    if(hash[s2[j - s1.length]] === undefined ) {
      hash[s2[j]]= 1;
    } else {
       hash[s2[j - s1.length]]++;
    }
    if (checkAllZeroes()) return true;
  }
    
    //console.log(hash)
    
  
  
  return false;
};