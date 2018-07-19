//Q8 *************************
/*
Time Complexity Analysis | Tower Of Hanoi (Recursion)
*/

function helper(n, from, to, aux){
  if(n ===1){
     console.log(`moving disk ${n} from ${from} rod to${to} rod `);
    return
  }
  helper(n-1, from, aux, to);
  console.log(`moving disk ${n} from ${from} rod to${to} rod `);
  helper(n-1,aux,to,from)
}

function toweroOfHanoi(disks){
  helper(disks, 'A', 'C', 'B')
  
}

toweroOfHanoi(3)
