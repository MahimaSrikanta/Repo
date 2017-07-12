function Insertionsort (arr) {
  for(var j =1; j<arr.length; j++ ) {
    var i = j-1;
    var temp = arr[j];
    while(i>=0 && arr[i]< temp) {
      arr[i+1] = arr[i];
      i--;
    }
    arr[i+1] = temp;
  }
  return arr
}

Insertionsort([8,6,1,9,3]);

//selection StopIteration

function selectionSort(arr) {
  for(var i =0; i< arr.length-1; i++) {
    var min = i;
    for(var j =i+1; j< arr.length; j++) {  // keep in mind that j = i+1
      if(arr[j]< arr[min]) {
        min = j;
      }
    }
    if(arr[i]> arr[min]) {
      var temp = arr[min];
      arr[min]= arr[i];
      arr[i]=temp;
    }
  }
  return arr;
}
selectionSort([8,6,1,9,3]);

//mergeSort
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
  //console.log(left, right)
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
var a = [8,6,1,9,3]
console.log(MergeSort(a));

// binary search

function binarySearch(arr, k) {
  var start =0;
  var end = arr.length-1;
  while(start <= end) {
    var mid = Math.floor((start +end)/2)
    if(arr[mid] === k) {
      return mid;
    }else if(arr[mid] > k) {
      end = mid-1;
    } else {
      start = mid+1;
    }
  }
  return -1;
}

binarySearch([1,2,3,4,5,7],1)