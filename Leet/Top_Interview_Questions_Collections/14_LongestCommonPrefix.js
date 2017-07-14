/*

Write a function to find the longest common prefix string amongst an array of strings.
*/

//accepted

// make the first word as prefix and keep on checking if the whole prefix is the prefix in other words too , else keep removing the letters from prefix from end

var longestCommonPrefix = function(strs) {
  if(strs.length === 0) {
    return "";
  } 
  var pre = strs[0];
  for(var i =1; i< strs.length; i++) {
    while(strs[i].indexOf(pre) !== 0) {
      pre = pre.slice(0, pre.length-1)
    }
  }
  return pre;
};