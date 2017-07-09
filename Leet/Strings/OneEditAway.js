/*One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.*/

const OneAway = (str1, str2) => {
  var hashObj = {};
  var differenceCounter = 0;
  var result = true;
  if(Math.abs(str1.length - str2.length) >= 2) {
    return false;
  }
  str1.split("").forEach(letter => {
    if(hashObj[letter] === undefined) {
      hashObj[letter] = [1,0];
    } else {
      hashObj[letter][0]++;
    }
  })
 // console.log(hashObj)
  str2.split("").forEach(letter => {
    if(hashObj[letter] === undefined) {
      hashObj[letter] = [0,1];
      
    } else if( hashObj[letter][1] !== undefined) {
      hashObj[letter][1]++;
    } else {
      hashObj[letter].push(1);
    }
  });
  //console.log(hashObj);
  Object.keys(hashObj).forEach(key => {
    if(Math.abs(hashObj[key][0] - hashObj[key][1]) >= 2){
      //console.log("1st")
      result = false;
    }
    if(Math.abs(hashObj[key][0] - hashObj[key][1])===1 && differenceCounter <=1){
      //console.log("3rd")
      differenceCounter++
    } else if(differenceCounter >1) {
      result = false;
    }
      
  
  })
  console.log (result)
}

// Efficient Solution

/*
Let the input strings be s1 and s2 and lengths of input 
strings be m and n respectively.

1) If difference between m an n is more than 1, 
     return false.
2) Initialize count of edits as 0.
3) Start traversing both strings from first character.
    a) If current characters don't match, then
       (i)   Increment count of edits
       (ii)  If count becomes more than 1, return false
       (iii) If length of one string is more, then only
             possible  edit is to remove a character.
             Therefore, move ahead in larger string.
       (iv)  If length is same, then only possible edit
             is to  change a character. Therefore, move
             ahead in both strings. 
    b) Else, move ahead in both strings. 
*/ 

var OneAway = (s1, s2) => {
  if(Math.abs(s1.length-s2.length) >= 2) {
    return false;
  }
  var differenceCount = false;
  var max = s1.length > s2.length ? s1 : s2;
  var min = s1.length > s2.length ? s2 : s1;
  var i=0, j =0;
  while(i < max.length) {
    
    if(max[i] !== min [j]) {
      if(differenceCount) {
        
        return false;
      }
      differenceCount = true;
      if(max.length !== min.length) {
        i++;
      } else {
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  return true;
};

OneAway("pales","brake" )