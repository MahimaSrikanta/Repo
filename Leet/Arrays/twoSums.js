var twoSum = function(numbers, target) {
  var result = [];
  var i = 0;
  var j = numbers.length-1;
  
  while(i<= j) {
    if(numbers[i] + numbers[j] === target) {
      result.push(i,j)
      return result;
    } else if (numbers[i] + numbers[j] > target) {
      j--;
    } else if(numbers[i] + numbers[j]  < target){
      i++;
    }
  }
  return result;
    
};