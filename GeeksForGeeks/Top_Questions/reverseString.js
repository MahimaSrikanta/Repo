//time: 4:01 PM
// two pointer start and end 
// check if the start pointer value is not apha then only increase the start pointer 
// if end pointer value is not alpha then only increse end pointer
// if both are aplha then swap them;
// do this till start <= end 

var isanAlpha = function (letter) {
  if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 123 ) {
    return true;
  } else if(letter.charCodeAt(0) >= 65 && letter.charCodeAt(0)<= 91 ) {
  return true
  }
  else {
    return false
  }
}
var reverseArray = function (str){
  var temResult = str.split("");
  var start = 0;
  var end = str.length-1;
 
  
  while(start <= end) {
    console.log(start, end)
    if(!isanAlpha(temResult[start])) {
    
      start++;
    } else if (!isanAlpha(temResult[end])) {
        console.log(temResult[end])
      end--;
    } else {
      console.log("heere", start, end)
      var temp = temResult[start];
      temResult[start] = temResult[end];
      temResult[end] = temp;
      start++;
      end--;
    }
  }
  return temResult.join("");
}

reverseArray("Ab,c,de!$")