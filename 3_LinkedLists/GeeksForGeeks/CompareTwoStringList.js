/*
Compare two strings represented as linked lists
Given two linked lists, represented as linked lists (every character is a node in linked list). 
Write a function compare() that works similar to strcmp(), i.e., it returns 0 if both strings are same, 1 if first linked list is lexicographically greater, and -1 if second string is lexicographically greater.
*/

/*
  Logic: Run  pointers through both strings. while both pointers are not null and both pointer values are equal.
   outside while loop, if the pointers are not null but if the ptr1 is greater then ptr2 return 1 else return -1.
   if one of the pointer is null if its ptr1 return 1, is ptr2 then return -1

   Time Complexity : O(n)
*/
