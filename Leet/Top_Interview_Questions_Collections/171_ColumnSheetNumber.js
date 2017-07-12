/*
"A" --> 65-64 => 1
"AA" --> 26*1 + 1 
"AB" --> 26*1 +2

 think what is left after the 0th place item, the sum of 0th place is needed to multiply with 1's place
*/
 var assert = function (actual, exp) {
   if(actual === exp) {
     console.log("Test passed");
   } else {
     console.log("Not the right value");
   }
 }
 
 var titleToNumber = function(s) {
   var value = s.split("");
   var result=0;
   for(var i =0; i< value.length; i++) {
     result = result * 26 + (value[i].charCodeAt(0) - 64 )
   }
  return result  
};
titleToNumber("ZZ");
 
 //assert(27,titleToNumber("AA") );