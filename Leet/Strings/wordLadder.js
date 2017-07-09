// unable to solve this word ladder problem

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 
 function TreeNode(val,steps) {
   this.val = val;
   this.steps = steps;
 }
var ladderLength = function(beginWord, endWord, wordList) {
  var tree = new TreeNode(beginWord, 1);
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var queue = [];
  var result =[];
  queue.push(tree);
  result.push(tree.val);
  while(queue.length > 0) {
    var node = queue.pop();
    if(node.val === endWord) {
      return (node.val)
    }
    for(var i =0; i< node.val.length; i++){
      var testWord= "";
      alpha.split("").map(function(letter) {
        testWord = node.val.split("");
        testWord.splice(i,1,letter);
        testWord= testWord.join("");
      if(wordList.includes(testWord) ) {
        queue.push(new TreeNode(testWord, node.steps+1));
        result.push(testWord);
        //console.log(queue);
        var index = wordList.indexOf(testWord);
        wordList.splice(index,1);
      }
      });
    }
  }
  return result
};

ladderLength ("hit", "cog", ["hot","dot","dog","lot","log"])