/*
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
  */
/**
 * @param {string[]} tokens
 * @return {number}
 */

// Leet code test is stupid. for this problem

var evalRPN = function(tokens) {
  var stack = [];
  var ops = ["+", "-", "*", "/"];
  var result;
  tokens.forEach(function(item) {
   
    if(ops.includes(item)) {
      var num2 = stack.pop();
      var num1 = stack.pop();
      if(item === "+") {
        stack.push( num1 + num2);
      } else if(item ==="-") {
        stack.push (num1 - num2);
       
      } else if(item === "*") {
        stack.push( num1 * num2);
      } else if(item === "/") {
        stack.push(num1/num2);
      }
     
    } else {
      stack.push(parseInt(item))
    }
  })
  return Math.floor(stack[0]);
    
};