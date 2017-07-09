//https://www.youtube.com/watch?v=cGlNehp57Y0

var buildTree = function(preorder, inorder) {
	var preStart = 0;
	var preEnd = preorder.length-1;
	var inStart = 0;
	var inEnd = inorder.length-1;
	var helper = function(preStart, preorder, preEnd, inStart, inorder, inEnd);    
};

var helper = function (preStart, preorder, preEnd, inStart, inorder, inEnd) {
  if(preStart >preEnd || inStart> inEnd) {
  	return null;
  }
  var val = preorder[preStart]
  var tree = new Treenode(val);
  //get the index of the split 
  var k =0;
  for (int i =0; i< inorder.length; i++) {
  	if(inorder[i] === val){
      k=i;
  	}
  }
  tree.left(preStart+1, preorder, preStart+(k-inStart), inStart, inorder, k-1)
  tree.right(preStart+(k-inStart)+1, preorder, preEnd, k+1, inorder, inEnd )
}