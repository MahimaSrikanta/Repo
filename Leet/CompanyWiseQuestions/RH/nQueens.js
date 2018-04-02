//N Queens 

var checkValid = (mat, Qcol, Qrow, attack) => {
    let diag1 = Qrow-Qcol;
    let diag2 = Qrow+Qcol;
   
    
    for(let i=0; i<mat.length; i++){
      attack.push([Qrow,i]);
      attack.push([i,Qcol]);
      for(let j=0; j<mat[i].length; j++){
        if((i-j) == diag1){
          attack.push([i,j])
        }else if ((i+j) == diag2){
          attack.push([i,j])
        }
      }
    }
  
    return (attack);
    
  }
  
  var helper = (mat, solutions, col, level,temp,attack ) => {
     checkValid(mat,col,level, attack);
    console.log("attack",attack)
    //base case
    for(let j=0; j<mat.length; j++){
      for(let k=0; k<attack.length; k++){
        let s = attack[k].join("");
        if(""+level+j === s){
          break;
        }else if(k=== attack.length-1){
          temp.push(level,j)
        }
      }
    }
    solutions.push(temp)
  //  helper(mat, solutions, temp[1], temp[0]+1, temp)
  
    console.log("temp", temp)
    
  }
  
  var nQueen = (n) => {
    var mat =[];
    var solutions =[];
    for(let i=0; i<n; i++){
      mat.push([]);
      for(let j=0; j<n; j++){
        mat[i][j]='.'
      }
    }
  
    // for(let i=0; i<n-1; i++){
    //   for(let j=0; j<n; j++){
    //     helper(mat, solutions, j, i+1, [], []);
    //   }
    // }
    solutions.push([0,0])
     helper(mat, solutions, 2, 1, [], []);
    
    
  }
  
  nQueen(3);

  