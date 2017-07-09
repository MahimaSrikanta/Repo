/*Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.*/
//Page Number 103
const PalindromePermuation = str =>{
  var hashObj = {};
  var oddCounter =0;
  var result= true;
  // split the string to get an array of letters
  // loop through array and check if the letter is a space 
  str.toLowerCase().split("").forEach(item => {
    // yes --> ignore space
    //No, check if the letter already exists as key in hashObj
    if(item !== " ") {
       //No --> insert the key into hashObj
      if(hashObj[item] === undefined) {
        hashObj[item] =1;
      } else {
        //yes --> increase the value counter
        hashObj[item]++;
      }
    }
  })
  console.log (hashObj)
       
  // Loop through all the keys of hashObj and check if the values are for all keys are even, if any key exists with odd count, its the only occuring once. 
  Object.keys(hashObj).forEach(key => {
    console.log(key)
    //check if there are any odd length, only one can exists if so
    if(hashObj[key]%2 !== 0 && oddCounter >= 1) {
      console.log("hiiii", hashObj[key])
      result= false;
    } else if(hashObj[key]%2 !== 0) {
      console.log("counter", oddCounter)
      oddCounter++;
    } 
  })
  return result;  

}

PalindromePermuation("tact coaes")