
//this does not works for duplicate letters, for that we would need a hashtable to exactly keep track

var helper = function (str, result, temp) {
  if(temp.length === str.length) {
    result.push(temp);
    return;
  }
  
  for(var i =0; i<str.length; i++) {
    if(temp.indexOf(str[i]) === -1) {
      helper(str, result, temp+str[i]);
    }
  }
  return result
}

var allanagrams = function (str) {
  var result =[];
  return helper(str,result, "");
}

allanagrams("abc")