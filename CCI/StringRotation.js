/*Assume you have amethod isSubstring which checks ifone word is asubstring of another. 
Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one call to isSubstring
 (e.g.,"waterbottle"is a rotation of"erbottlewat").
*/

function isSubstring(s1, s2) {
    s1 = s1.split("");
    var rotationIndex= 0;
    result = true;
    s2.split("").forEach(function(item, index) {
        if(item === s1[0]) {
          rotationIndex = index;
        }
    });
    var j =rotationIndex;
    for(var i =0; i < s1.length; i++) {
        if(s1[i] !== s2[j]) {
          result = false;
          return;
        } else {
            j = (j+1)%s1.length;
        }
    }
   return result;
}
isSubstring("waterbottle", "erbottlewat")