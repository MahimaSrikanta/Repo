/*Given a string, write a function to check if it is a permutation of a palin- drome. 
A palindrome is a word or phrase that is the same forwards and backwards. 
A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.
*/


function PermuationPalindrome (str) {
    var hashObj = {};
    var counter =0;
    var result = true;
    str.toLowerCase().split(""). forEach(function(letter) {
        if(letter !== " ") {
            if(hashObj[letter] === undefined) {
                hashObj[letter] = 1;
            } else {
                hashObj[letter] = hashObj[letter] +1;
            }
        }
    });
    console.log(hashObj)
  if ((str.length)%2 === 0) {
    Object.keys(hashObj).forEach(function(key) {
        if(hashObj[key] %2 !== 0) {
            return false;
        }
    })
  } else {
    Object.keys(hashObj).forEach(function(key) {
       console.log(hashObj[key])
      if(hashObj[key] %2 !== 0  && counter >=1) {
         result= false;
        
      } else if (hashObj[key] %2 !== 0  && counter < 1) {
        console.log('else', key)
        counter = counter+1;
      }
    });
  }
 return result;
}