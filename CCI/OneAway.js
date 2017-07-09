/*One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. 
Given two strings, write a function to check if they are one edit (or zero edits) away

EXAMPLE
pale, pIe -> true 
pales. pale -> true 
pale. bale -> true 
pale. bake -> false
*/

function OneAway(str1, str2) {
   var counter=0;
   result = true;

  if(Math.abs(str1.length - str2.length) > 1) {
    result= false;
  } else {
  for(var i=0; i< str1.length; i++) {
      if(str1[i] !== str2[i] && counter <1) {
        counter ++;
      } else if(str1[i] !== str2[i] && counter >1) {
          result =false;
      }
   }
  }
  return result;
}
