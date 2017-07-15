//Rock paper scissors

var permute = function (n) {
  var  value = ["Rock", "Paper", "Scissor"];
  var result =[];
  var temp =[];
  var helper = function (n, temp) {
    //base case
    if(n === 0) {
      result.push(temp.slice(0))
      return;
    }
    for(var i =0; i< value.length; i++) {
      temp.push(value[i]);
      helper(n-1, temp);
      temp.pop();
    }
  }
  helper(n, temp)
  return result;
}

permute(3)