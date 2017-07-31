
// Page 109

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }
 TreeNode.prototype.addLeft = function(value) {
    var tree = new  TreeNode(value);
    if(this.left === null){
      this.left = tree;
    } else {
      console.log("Already Left child exists");
    }
    return tree;
}

 TreeNode.prototype.addRight = function(value) {
    var tree = new  TreeNode(value);
    if(this.right === null){
      this.right = tree;
    } else {
      console.log("Already Right child exists");
    }
    return tree;
}


var helper = function (nums, start, end) {

  if(start > end) {
    return
  }
  var mid = Math.floor((start +end)/2);
  var root = new TreeNode(nums[mid]);
  root.left = ( helper(nums,start,mid-1));
  root.right = (helper(nums, mid+1,end));
  return root
}

var sortedArrayToBST = function(nums) {
  
  var result= helper(nums, 0, nums.length-1);
  console.log(result.right)
}
sortedArrayToBST([1,2,3,4,5,6,7])
