/*iven an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

var majorityElement = function(nums) {
  var hash = {}
  var max = 0;
  var letter ="";
  nums.forEach(function(number, index) {
    if(hash[number] === undefined) {
      //console.log("hi")
      hash[number] = 1;
    } else {
      hash[number]++;
    }
  });
 console.log(hash)
Object.keys(hash).forEach(function(key) {
  if(hash[key] > max) {
    max= hash[key];
    letter = key;
  }
});
return parseInt(letter)
  
};