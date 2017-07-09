/*
INSERTION-SORT(A)
1 for j ← 2 to length[A]
2 do key ← A[j]
3 ✄ Insert A[j] into the sorted sequence A[1 . . j − 1].
4 i ← j − 1
5 while i > 0 and A[i] > key
6 do A[i + 1] ← A[i]
7 i ← i − 1
8 A[i + 1] ← key

Worst case Complexity : O(n^2) => when the array is reversely sorted
Best case Complexity : Omega (n) => when the array is already sorted
Space Complexity : O(1)

Note: Usage of binary search in the sorted array at LHS does not reduces the time complexity
*/

function InsertionSort (array) {
  for(var j =1; j < array.length; j++) {
    var temp = array[j];
    var i = j-1;
    while(i>= 0 && array[i]> temp) {
      array[i+1] = array[i];
      i--;
    }
    array[i+1] = temp;
  }
  return array
}

InsertionSort([5,2,4,6,1,3,5])