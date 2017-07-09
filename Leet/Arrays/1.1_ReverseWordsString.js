/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/
//Accepted
var reverseWords = function(s) {
 s.split(" ").forEach(function(word) {
 	word.split("").reverse().join("");
 }).join(" ");
};

