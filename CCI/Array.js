//O(n^2) Constraint : without using additional datastructure
function uniqueCharacters(str) {
  var array = str.split("");
  for(var i =0; i< array.length; i++) {
    for(var j =i+1; j< array.length; j++) {
      if(array[i] === array[j]) {
        return false;
      }
    }
  }
  return true;
}
uniqueCharacters('abcde');

// O(n) -> using hash table or array of 128 characters with all false as initial value