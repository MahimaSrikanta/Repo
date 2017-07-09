// Merge Sort 

// Algorithm 
/*
Merge function(array, p,q,r) {
    n1 = q-p+1;
    n2 = r-q;
    left = [1...n1 +1], right = [1, n2+1] // copy all the LHS and RHS respectively into the subArrays
    left [n1] = infinity
    right[n2] = infinity
    i = j= 1;
    result = [];
    for(var k => p to r ) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else if(right[j] <  left[i]) {
            result.push(right[j]);
            j++;
        }
    }
}

MergeSort function(array, p, r) {
    if(p<r) {
        q = p+r/2;
        mergeSort(array, p, q);   n/2
        mergeSort(array, q, r);   n/2
        merge(array,p,q,r );      n
    }

}

Space Complexity : O(n)
Time complexity : O(nlogn)
*/

function MergeSort(array) {
  // if array length is 0 or 1 already sorted
  if(array.length < 2) {  // base case
    return array
  } 
  var middle =Math.floor(array.length/2);
  var left = array.slice(0, middle);
  var right = array.slice(middle, array.length);
  return merge(MergeSort(left), MergeSort(right));
  
}

function merge (left, right) {
  var result =[];
  while(left.length && right.length) {  // always keeps decrementing the aray which has smaller 0th value and adds to the result;
    if(left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // Adding the left outs to the result
  while(left.length) {
    result.push(left.shift());
  }
  
  // Adding the right leftouts if any to result
  while (right.length) {
    result.push(right.shift())
  }
  
  return result
}
var a = [34,203,3,706,5,1]
console.log(MergeSort(a));