/*
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

*/


var helper = function(result, hash,digits,index,temp) {
  if(temp.length === digits.length){
    result.push(temp);
    console.log(result)
    return;
  }
  console.log(hash[digits[index]])
  for(var i =0; i< hash[digits[index]].length; i++){

    helper(result,hash,digits,index+1,temp+hash[digits[index]][i]); // important , temp+
    //temp.slice(0,temp.length-1);
  }
  return result;
}
var letterCombinations = function(digits) {
  var result=[];
  var temp="";
    if(digits === "") {
        return result;
    }
  
  var hash = ["", "", "abc", "def", "ghi", "jkl", "mno",
                          "pqrs", "tuv", "wxyz"];
              
 return  helper(result,hash,digits,0, "")
};

letterCombinations("23")
