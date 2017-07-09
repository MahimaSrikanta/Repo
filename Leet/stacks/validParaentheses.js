/*Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/
//Accepted

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // var open = ['(', '{', '['];
    // var close = [')', '}', ']'];
    var hash = {
      '(' : ')',
      '{' : '}',
      '[' : ']',
    }
    var stack =[];
    var result = true;

    s.split ("").forEach(function (item) {
      if(Object.keys(hash).includes(item)) {
        stack.push(item)
      } else {
        if(hash[stack.pop()] !== item){
          result = false;
        }
      }
    });
    if(stack.length !== 0) { // Also check if the stack is empty 
      result = false;
    }
    return result;
    
};