/*This is one of the questions I’ve asked the candidates: Find the maximum number in a jagged array. Each element of the array can be a number or an array of other numbers on indefinite number of levels, like this:

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
*/



function largest (array) {
    var max = -Infinity;
    
    var helper = function(arr) {
      
      for(var i =0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
          helper(arr[i]);
        }else {
          if(arr[i] > max){
            max= arr[i];
          }
        }
      }
    }
    helper(array);
    return max;
    
  }
  
  largest([2, 4, 10, [12, 4, [100,99], 4], [3, 2, 99], 0])

  //Rock paper scissors

function generator ( count){
    var opt = ['Rock', 'Paper', 'Scissors'];
    var result =[]
    var temp =[]
    var helper = function (c){
     //base case
     if(c=== 0){
       result.push(temp.slice(0));
       return
     }
     
     for(var i =0; i<opt.length; i++){
      temp.push(opt[i]);
      helper(c-1);
      temp.pop();
     }
  
      
    }
    
    helper(count, temp);
    return result;
  }
  
  generator(3);

  /*
Delete middle element of a stack
Given a stack with push(), pop(), empty() operations, delete middle of it without using any additional data structure.

Input  : Stack[] = [1, 2, 3, 4, 5]
Output : Stack[] = [1, 2, 4, 5]

Input  : Stack[] = [1, 2, 3, 4, 5, 6]
Output : Stack[] = [1, 2, 4, 5, 6]
*/


function middleElementDelete (stack){
    var mid =0;
    
    var helper = function (stack, len){
      // base case;
      
      if(stack.length ===0){
        mid = Math.floor(len/2);
        return len;
      }
      var element = stack.pop();
      helper(stack, len+1);
      if(len !== mid) {
       stack.push(element)
      }
     
    }
    
    return helper(stack, 0);
  
  }
  middleElementDelete([1, 2, 3, 4, 5])
  