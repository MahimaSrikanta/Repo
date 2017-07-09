/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// time Complexity : O(n);
 //space complexity : O(n);
 //accepted
 //take two hash and save the keys as own letter and value as the second word's letter and check if they are equal;
var isIsomorphic = function(s, t) {
  var hashS = {};
  var hashT = {};
  for(var i =0; i<s.length; i++) {
    var a = hashS[s[i]];
    var b = hashT[t[i]];
    if(a === undefined && b=== undefined) {
      hashS[s[i]] = t[i];
      hashT[t[i]] = s[i];
    } else if ( s[i]!== b ) {
      return false;
    }
  }
  return true
};



isIsomorphic("aa", 'ab')
