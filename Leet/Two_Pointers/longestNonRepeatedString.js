/*Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.*/


//accepted
//start with i and j pointer, move i  and save into hash i's str value and value as the index . if a hash key is found
// then move the j 1+ to the position of the found key's index(previous position). max always finds the difference between j and j pointer and keeps track of when they were maximum
function lengthOfLongestSubstring (str) {
  var hash = {}
	var max=0;
	for(var i =0, j=0; i< str.length; i++) {
		if(hash[str[i]] !== undefined) {
			j = hash[str[i]] +1;  //needs Math.max(j, hash[str[i]]+1) --> consider "abba"

		}
		hash[str[i]] = i;
		max= Math.max(max, i-j+1);
	}

	return max;
}

//lengthOfLongestSubstring("abcabcbb")
    
   // lengthOf("abcabcbb");

lengthOfLongestSubstring("abba")