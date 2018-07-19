//Given a String Print all possible palindromic partitions

/*
Logic: 
Logic: dynamic programming , Use a matrix with string length * string length filled with false
1.  pointer i : loop through string length (outer loop) to take each one letter from the word and next take two letters from the word so on
2. inner loop to loop through all the letters of the word to determine the first letter of word with length i;
3. k pointer to determine the last letter of the word 
 if the word length being considered is 2 or less and the start and end letters are same then its palindrome, or else if matrix corresponding to that word is set to true then its a palindrome


 Time complexity : O(n^2), space complexity : O(n^2)

*/

const PalindromicPartitions = (str) => {
    let mat = [];
    let max =0;
    let result =''
    //generate matrix
    for(let i =0; i<str.length; i++){
      let temp =[];
      for(let j=0; j<str.length; j++){
        temp.push(false)
      }
      mat.push(temp)
    }
   
   for(let i =0; i<str.length; i++){ // to provide 
   // palindrome word length  1 letter, 2 letter, 3 letter so ..on 
     for(let j =0; j<str.length; j++){ // to loop through the letter 
       let k = i+j; // last letter with i letter length
       if(str[j] === str[k] && ((k-j) <=2 || mat[j+1][k-1])){
         mat[j][k] = true;
         let part = str.slice(j,k+1);
         if(part.length >1){
           console.log(str.slice(0,j), part, str.slice(k+1))
         }else {
           console.log(part)
         }
  
       }
     }
   }
    
  }
  
  PalindromicPartitions("nitin")