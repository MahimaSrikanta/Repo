
//Remove all the duplicates

function RemoveDuplicates (str) {
  let str1 = str.split("");
  for(let i =str1.length-1; i>=0; i--){
    for(let j =0; j<i; j++){
      if(str1[i] === str1[j]){
        str1.splice(i,1)
      }
    }
  }

  return str1.join("");
}


RemoveDuplicates("ABCABR")