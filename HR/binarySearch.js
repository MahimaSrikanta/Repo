/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function (array, target) {
    var last = array.length;
    var first = 0;
    var result;
for(var i =0; i< array.length; i ++) {
    var mid = Math.floor((first+last) /2);
    if(target === array[mid]) {
        return mid;
    } else if (target > array[mid]) {
        first = mid;

    } else if(target < array[mid]) {
        last = mid;
    } else {
        return 'not found'
    }
}
};
