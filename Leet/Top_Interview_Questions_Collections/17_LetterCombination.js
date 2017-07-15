/*
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

//Accepted
var helper = function(digits, result, str, hash, n) {
  //base case
  if(str.length === digits.length) {
    result.push(str);
    return;
  }
  for(var i =0; i< hash[digits[n]].length; i++) {
    helper(digits, result, str+hash[digits[n]][i],hash, n+1);  // the main logic works here, (especially the n+1). // takes "a"+ "d,e,f" and then "b" + "d,e,f" so on
  }
  return result;
}


var letterCombinations = function(digits) {
    if(digits === "") {
        return [];
    }
  var result =[];
  var hash = ["", "", "abc", "def", "ghi", "jkl", "mno",
                          "pqrs", "tuv", "wxyz"];
                          
  return helper(digits, result, "", hash, 0);
};

letterCombinations("234")