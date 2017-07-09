//Check Permutation: Given two strings, write a method to decide if one is a permutation of the other

function Permutation (str1, str2) {
 var s1= str1.split("").sort().join("");

 var s2 = str2.split("").sort().join("");

  console.log(s1, s2)
  if(s1 === s2) {
    return true;
  }
  return false; 
}

Permutation('abc', 'bca')