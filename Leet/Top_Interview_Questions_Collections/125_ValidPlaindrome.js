/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindr
*/

//accepted

var isPalindrome = function(s) {
    if(s === "" || s.length ===1) {
        return true;
    }
  var regex = /\w+/g;
  var test = s.match(regex);
    if(test !== null) {
        test = test.join("").toLowerCase();
    
  //console.log(test)
  for(var i=0, j= test.length-1; i<=j;i++,j-- ) {
    if(test[i] !== test[j]) {
      return false;
    }
  }
 }
  return true;
};