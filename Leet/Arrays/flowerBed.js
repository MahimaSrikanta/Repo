/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

 //using stacks, but not accepted , as there are some edge cases
var canPlaceFlowers = function(flowerbed, n) {
  var stack = [];
  var count =0;
  
  for(var i =0; i < flowerbed.length; i++) {
    if(flowerbed[i] ===1) {
      stack.push("#");
    } else if(flowerbed[i] ===0 && stack.length !== 0) {
      stack.pop();
    } else if(flowerbed[i] ===0 && stack.length === 0) {
      count ++;
      stack.push("#");
    }
  }
  return count === n && stack.length <=1 ? true : false;
};

 canPlaceFlowers([1,0,0,0,1], 1)

 //alernative solution using greedy algorithm
 //accepted
 var canPlaceFlowers = function(flowerbed, n) {
 var count =0;
 for(var i =0; i< flowerbed.length; i++) {
   // if the number is 0 , check for its prev and next. if 0 is found at edges, then the prev and next will be 0 respectively.
   if(flowerbed[i] === 0) {
     var next = (i === flowerbed.length-1 ? 0: flowerbed[i+1]);
     var prev = (i === 0? 0: flowerbed[i-1]);
   }
   if(next === prev && next ===0) {
     flowerbed[i] =1;
     count++;
   }
 }
 return count >= n ? true: false;
};