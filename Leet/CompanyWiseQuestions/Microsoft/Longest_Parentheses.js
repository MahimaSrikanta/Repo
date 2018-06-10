var longestValidParentheses = function(s) {
  let max =0;
  let start =0;
  let end =0;
  let len =0;
  let result = "";
  let hash ={'(':')', '{':'}', '[':']'};
  let stack =[];
  
  for(let i=0; i<s.length;i++){
    if(hash[s[i]]){
      stack.push(s[i]);
    }else {
      let temp = stack.pop();
      if(hash[temp] === s[i]){
        len++;
      }else {
        if(max < len){
          max = len;
          result = s.slice(start, i);
        }else{
          len =0;
          start = i+1;

        }
      }
    }
  }
  return result
};

longestValidParentheses(")()())")