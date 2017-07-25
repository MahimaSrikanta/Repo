//Given a string, print all possible palindromic partitions

//http://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/


//Program tweeked , it prints all the palindromes , not all palindromic partitions using Dynamic programing

var createMatrix = function (len) {
  console.log(len)
  var arr1 = new Array(len);
  for(var i =0; i<=len; i++) {
    arr1[i] = new Array(len);
  }
  return arr1;
}

var partition = function(s) {
  var mat = createMatrix(s.length-1);
  var result =[];
  var temp =[];
  
  // trivial case
  for(var j=0; j<s.length; j++) {
      mat[j][j] = true;
      temp.push(s[j])
  }
  result.push(temp);
  temp =[];
  
  // second digit case
  for(var j=0; j<s.length; j++) {
 
     if(s[j] === s[j+1]) {
       mat[j][j+1] = true;
       temp.push(s.slice(j,j+2))
     } 
  }
  if(temp.length !== 0) {
  result.push(temp);
  }
    temp =[];
    
  // 3 and more value case
 for(var k=2; k<s.length; k++) { // number of alpha distance that needs to be looped  
   for(var j=0; j<s.length-k; j++) {
    
      if(s[j] === s[j+k]) {
        console.log(k+j-1,j+k-1)
        if(mat[k+j-1][j+k-1]) {
          mat[j][j+k] = true;
           temp.push(s.slice(j,j+k+1))
        }
      }
      
    }
    if(temp.length !== 0) {
      result.push(temp);
    }
    temp =[];
  }
  
  console.log(result)
};

partition("nitin")