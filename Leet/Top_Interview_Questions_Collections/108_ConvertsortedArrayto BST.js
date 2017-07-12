//Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

//solution not accepted, though looks like the logic and implementation looks fine
// output to sortedArrayToBST([-10,-3,0,5,9]) works fine 

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }
 

var sortedArrayToBST = function(nums) {
	if(nums.length === 0) {
		return nums;
	}
	var mid = Math.floor(nums.length/2)
	var leftArray = nums.slice(0, mid);
	var rightArray = nums.slice(mid+1,nums.length );
	var root = new TreeNode(nums[mid]);
	root.left = sortedArrayToBST(leftArray);
	root.right = sortedArrayToBST(rightArray);
    
    return root

}

sortedArrayToBST([-10,-3,0,5,9])