var stairs = function(n) {
  if(n < 0){
    return 0;
  }
  if(n === 0 || n ===1) {
    return 1;
  }
  
  return stairs(n-1) + stairs(n-2)+ stairs(n-3)
}

stairs(3);


var hash = {};
var stairs = function(n) {
  if(n < 0){
    return 0;
  }
  
  if(n === 0 || n ===1) {
    return 1;
  }
  if(hash[n] === undefined){
  
    hash[n]= stairs(n-1) + stairs(n-2)+ stairs(n-3)
  }
  return hash[n];
}

stairs(3)