//1.1  IsUnique
/*
-Without extra space.
Logic:Nested Loop and go on checking if a letter is uniqie or not in the string 
Complexity: O(n^2);
*/
let IsUnique = function(str) {
    for(let i =0; i<str.length; i++){
      for(letj=i+1; j<str.length; j++){
        if(str[i] === str[j]){
          return false;
        }
      }
    }
    return true;
  }
  /* Using extra space.
  Logic: Use Hash map to keep track of all the letters of the string and store as keys
  Compleity: O(n)
  */
  
  //1.2 Check Permuation
  
  /*
   Logic: sort both the strings and check if they are same then they are the permutes of each other
   Complexity: (worst case of sorting) O(n^2)
  */
  
  let CheckPermute = function(str1, str2){
    return str1.split("").sort().join("") === str2.split("").sort().join("") ? true : false
  }
  
  CheckPermute("abc", "bca");
  
  
  //1.3 URLify
  /*
    - Insert %20 in spaces
    -Logic:
  */
  
  let urlify = function (str) {
    return str.trim().split(" ").join("%20");
  }
  
  urlify("Hello . my");
  
  //1.4 Permuation of a Palindrome
  /*
   Logic: Have a hash table  with keys as ther letter of the string and the frequency as its value. all the keys should have even number of occurance , except one in case of odd length word
  
   Time complexity: O(n)
  */
  
  let PermutePalindrome =function (str){
    let hash = {};
    let oddCount=0;
  
    for(let i=0; i<str.length; i++){
      if(hash[str[i]]) {
        hash[str[i]]++;
      }else {
        hash[str[i]] = 1;
      }
    }
    for(keys in hash){
      if(hash[keys]%2 !==0 && oddCount >=1){
        return false;
      }else if(hash[keys]%2 !==0) {
        oddCount++;
      }
    }
    return true
  }
  
  PermutePalindrome("tactco");

//1.5 One Away
/*
  Logic: Check if the two strings are of same length or diff is 1.
  Get the biggest string and run the loop with it. have a counter value to cound the edits. go on comparing letter by letter between two string if the do not match then increase the edits. if edits are greater than 1 then return false

  comsplexity : O(n)
*/

let oneEditAway = function(str1, str2){
    let editCount=0;
    if(Math.abs(str1.length - str2.length) >1){
      return false;
    }
    let large = Math.max(str1.length, str2.length);
  
    while(large>=0){
      if(str1[large] !== str2[large] && editCount>=1){
        return false;
      }else if(str1[large] !== str2[large]) {
        editCount++;
      }
      large--;
    }
    return true;
  }
  
  oneEditAway("Pale", "Bals");

  //1.6 String Compression
/*
  Logic: Have counter, which counts the number of similar consequtive letters, when unequality is found append the count with letter to result string 

  Time complexity: O(n)
*/

let StringCompression = function(str) {
    let letterCount =1;
    let result = '';
  
    for(let i=0; i< str.length; i++){
      if(str[i] === str[i+1]){
        letterCount++;
      }else {
        result +=letterCount+str[i];
        letterCount =1;
      }
    }
    return result.length < str.length ? result : str
  }
  
  
  StringCompression("aabccccca");
  
  //1.9 String rotation
  /*
    Logic: append the str at the end of itself and call the isSubstring function to check if the given str is rotation of original string
  */