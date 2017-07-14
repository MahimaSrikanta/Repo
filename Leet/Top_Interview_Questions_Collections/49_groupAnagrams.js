/*
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/

//accepted 


var groupAnagrams = function(strs) {
  // result array 
  // hash
  // loop strs array
   // sort each word and check if that sorted word is the key in hash?
     // yes: get the value of that hash key and push the actual word to the hash value
  // No: add the sorted word as key into hash and its value as an array with the actual word
  
 // loop through hash values and push each hash value arrays into the result array and Return
 

 var hash = {};
 for(var i =0; i< strs.length; i++) {
   var temp = strs[i].split("").sort().join("");
   if(hash[temp] === undefined) {
     hash[temp] = [strs[i]];
   } else {
     hash[temp].push(strs[i]);
   }
 }
return  Object.values(hash).map(function(item) {
   return item;
 })
};