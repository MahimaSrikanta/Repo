


var strStr = function(haystack, needle) {
    var step = needle.length;
    for(var i =0; i<haystack.length; i++){
       if(haystack.slice(i,i+2) === needle) {
           return i;
       }
    }
    return -1;
};
//strStr("hello", "ll")



var longestCommonPrefix = function(strs) {
  if(strs.length === 0) {
    return "";
  } 
  var pre = strs[0];
  for(var i =1; i<strs.length; i++) {
    while(strs[i].indexOf(pre) !== 0) {
      pre= pre.slice(0, pre.length-1)
    }
  }
  return pre
}