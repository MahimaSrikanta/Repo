/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

//Accepted 

var backtrackHerlper = function (n, str, start, close, result) {
  if(str.length === 2*n) {
    result.push(str)
    return str;
  }
  if(start < n) {
    backtrackHerlper(n, str+"(", start+1, close, result);
  }
  if(close < start) {
    backtrackHerlper(n, str+")", start, close+1, result);
  }
  return result;
}


var generateParenthesis = function(n) {
  var result =[];
  return backtrackHerlper(n, "", 0, 0,result );
};


generateParenthesis(3)