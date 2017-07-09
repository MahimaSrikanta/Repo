/*
Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string,
 your method should return the original string.
 You can assume the string has only uppercase and lowercase letters (a - z).
 */
function compression (str) {
  var result = [];
  var counter =1;
  var str = str.split("");
  for(var i =0; i< str.length; i++) {
    if(str[i] === str[i+1]) {
      counter++;
    } else if(str[i] !== str[i+1]) {
      result.push(str[i], counter);
      counter =1;
    }
   
  }
  return result.join("").length > str.length ? str.join("") : result.join("");
}
compression('abc')