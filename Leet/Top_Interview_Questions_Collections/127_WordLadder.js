/*
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
*/

//Not accepted, But many test case passed, some minor issues .

//Run BFS , and calculate the length to reach that level, increasing the length with each level.

//Time complexity would be  >O(n^2)

var isAdjacent  = function (word1, word2) {  // helper function to check if two words are adjacent or not 
//  console.log(word1, word2)
  var counter =0;
  for(var i =0; i< word1.length; i++) {
    if(word1[i] !== word2[i]) {
      counter++;
    }
  }
  return counter ===1 ? true : false;
}


var ladderLength = function(beginWord, endWord, wordList) {
  var result =[];
  var queue =[];

  queue.push([beginWord,1]);  // start with length of 1 to level 0

  
  while(queue.length !== 0) {
    var temp = queue.shift();
    var count = temp[1];
     
    for(var j =0; j< wordList.length; j++) {  // loop through all the words in the list
      if(isAdjacent(temp[0], wordList[j])) {  // check if adjacent
        result.push([wordList[j],count]);     // adjacent , push to result with count which represents the current level
        queue.push([wordList[j], count+1]);   // adjacent , push to result with count which represents the current level
        wordList.splice(j,1);                 // remove the all the checked words or visited words
        
      }
    }
    
    if(temp[0] === endWord ) {        // if end word reached  then only return the length
      return result.length ===0 ? 0 : result[result.length-1][1]+1;
    }
  }
  return 0;
  

    
};