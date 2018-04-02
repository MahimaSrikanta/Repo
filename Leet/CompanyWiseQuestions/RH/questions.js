/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
*/
function maxAreaOfIsland(grid) {
    let max_area = 0;
    for(let i = 0; i < grid.length; i++)
        for(let j = 0; j < grid[0].length; j++)
            if(grid[i][j] == 1)max_area = Math.max(max_area, AreaOfIsland(grid, i, j));
    return max_area;
}

function AreaOfIsland( grid,  i,  j){
    if( i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] == 1){
        grid[i][j] = 0;
        return 1 + AreaOfIsland(grid, i+1, j) + AreaOfIsland(grid, i-1, j) + AreaOfIsland(grid, i, j-1) + AreaOfIsland(grid, i, j+1);
    }
    return 0;
}

/*
Level order traversal in DFS and BFS
*/
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
  
  function level (root) {
  
  var hash = [];
  var helper=(root, index)=> {
    if(root === null){
      return;
    }
    helper(root.left, index+1);
    if(hash[index]!== undefined){
      hash[index].push(root.val)
    }else {
       hash[index]= [root.val]
    }
    helper(root.right, index+1)
  }
  helper(root,0);
  console.log(hash)
  }
  
  
  var binaryTree = new TreeNode(1);
  var right1 = binaryTree.addRight(3);
  var left1 = binaryTree.addLeft(2);
  var right2 = right1.addRight(5);
  var left2 = right1.addLeft(4);
  level(binaryTree)
  
  
  
  //BFS
  function level (root) {
    let queue = [root];
    let result = []
    while(queue.length!==0){
  
      let temp =[];
      let count = queue.length
      for(let i =0; i<count; i++){
        let node = queue.pop();
        temp.push(node.val);
        if(node.left !== null){
          queue.unshift(node.left);
        }
        if(node.right !== null){
          queue.unshift(node.right);
        }
      }
      result.push(temp.slice(0))
    }
    return result;
  }

  /*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1
*/

var helper = function(grid, r,c){
  //base case
  if(r<0 || c<0 || r>=grid.length || c>=grid[0].length || grid[r][c] !=="1")return ;
  grid[r][c]=0
  helper(grid, r+1,c);
  helper(grid, r, c+1);
  helper(grid, r-1,c);
  helper(grid, r, c-1);
  return 0;
  
}
var numIslands = function(grid) {
  let num =0;
  let temp =[];
  
  for(let i =0; i<grid.length; i++){
    for(let j=0; j<grid[0].length; j++){
      if(grid[i][j] ==="1"){
        //console.log(i,j)
        num++
       helper(grid, i, j);
      }
    }
  }
  return num;
    
};
var grid = [
[1,1,1,1,0],
[1,1,0,1,0],
[1,1,0,0,0],
[0,0,0,0,0]
]

var g = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
  
  ]
numIslands(g)
  

/*Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/


var spiralOrder = function(matrix) {
  let result =[];
  let Rmin =0, Rmax= matrix.length-1, Cmin = 0; Cmax= matrix[0].length-1;
  
  while(Rmin <=Rmax && Cmin <=Cmax){
    //top
    for(let i =Cmin; i<=Cmax; i++){
      result.push(matrix[Rmin][i]);
    
    }
      Rmin++
    //vertical down
    for(let i =Rmin; i<=Rmax; i++){
      
      result.push(matrix[i][Cmax]);
   
    }
       Cmax--;
     if(Cmax<= Cmin || Rmax <=Rmin) break;
   //down
   for(let i =Cmax; i>=Cmin; i--){
      result.push(matrix[Rmax][i]);
    
    }
      Rmax--;
    //vertical up 
    
    for(let i=Rmax; i>=Rmin; i--){
      result.push(matrix[i][Cmin]);
     
    }
     Cmin++;
  }
  console.log(result)
 };
 
 var a =[
  [2,3, 4]
 ]
 
 spiralOrder(a);

 /*
 59. Spiral Matrix II
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
Accepted
*/

var generateMatrix = function(n) {
  var max = Math.pow(n,2);
  let Rmax= n-1, Rmin=0, Cmax=n-1,Cmin=0;
  let count =1;
  var result =Array(n).fill().map(() => Array(n).fill(0));
  
 
  while(Rmax>=Rmin && Cmax>=Cmin){
    //move top from row=Rmin,Cmin= Cmax; Rmin++
    for(let i =Cmin; i<=Cmax; i++){
      result[Rmin][i]=count
      count++;
 
    }
    Rmin++;
    //Move vertical top down from col=Cmax, row=Rmin- Rmax; Cmax--
    for(let i =Rmin; i<=Rmax; i++){

      result[i][Cmax]=count
      count++;
    }
 
    Cmax--;
    //move bottom from row= Rmax, col= Cmax-Cmin; Rmax--;
    
    for(let i =Cmax; i>=Cmin; i--){
      result[Rmax][i]=count
      count++;
    }
    Rmax--;
    //Move vertical bottom top row = Rmax to Rmin, col = Cmin; Cmin++
    for(let i =Rmax; i>=Rmin; i--){
     
      result[i][Cmin]=count
      count++;
    }
    Cmin++;
  }
   console.log(result)
    
};

generateMatrix(4);

/*
74. Search a 2D Matrix

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
For example,

Consider the following matrix:

[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
Given target = 3, return true.

Accepted
*/
var searchMatrix = function(matrix, target) {

  let result =false;
  if(matrix.length !==0){
     let colEnd = matrix[0].length-1;
  //Loop through number of rows
  for(let i=0; i<matrix.length; i++){
    if(target >= matrix[i][0] && target <= matrix[i][colEnd] ){
      //loop through
      for(let j=0; j<=colEnd; j++){
        if(target === matrix[i][j]){
          result = true;
        }
      }
    }
  }
  }
  return result;
    
}
var a = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
searchMatrix([],4);


/*
Concise and straight forward! Cannot agree more.
Below is my Java solution:

public class Solution {
        public boolean searchMatrix(int[][] matrix, int target) {
            if (matrix == null || matrix.length == 0) {
                return false;
            }
            int start = 0, rows = matrix.length, cols = matrix[0].length;
            int end = rows * cols - 1;
            while (start <= end) {
                int mid = (start + end) / 2;
                if (matrix[mid / cols][mid % cols] == target) {
                    return true;
                } 
                if (matrix[mid / cols][mid % cols] < target) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
            return false;
        }
    }
*/

/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

Accepted
*/
    
var rotate = function(matrix) {
  let level = Math.floor(matrix.length/2);
  let count =0;
  let last = matrix.length-1;
  
  let swap =  (rowA, colA, rowB, colB)=> {
    let temp = matrix[rowA][colA];
    matrix[rowA][colA] = matrix[rowB][colB];
    matrix[rowB][colB] = temp;
  }
  while(count < level){
    for(let i=count; i<last; ++i){
      swap(count,i,i,last);
      swap(count,i,last,last-i+count);
      swap(count,i,last-i+count,count);
    }
    ++count;
    --last
  }
  return matrix;
};
let mat= [
[1,2,3,10],
[4,5,6,11],
[7,8,9,12],
[13,14,15,16]
];
rotate(mat);

//using extra space
    
var rotate = function(matrix) {
  let n = matrix.length;
  let temp = Array(n).fill().map(()=> {
    return Array(n).fill(0);
  });
  let col = n-1;
  for(let i =0; i<n; i++){
    for(let j=0; j<n; j++){
      temp[j][col] = matrix[i][j];
    }
    col--;
  }
  return temp;
};
let mat= [
  [1,2,3,10],
  [4,5,6,11],
  [7,8,9,12],
  [13,14,15,16]
];
rotate(mat);

/*

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16
Explanation: The perimeter is the 16 yellow stripes in the image below:
*/

var islandPerimeter = function(grid) {
  let flag = false;
    let area=0; 
   var helper = (grid, row, col) =>{
  if(row>=0 && col >=0 && row <grid.length && col <grid[0].length && grid[row][col] ===1){
      grid[row][col] = "*";
  // check top
    if(row === 0 || grid[row-1][col] === 0 ){
        area++
    }else {
        helper(grid,row-1, col)
    }
    if(col === 0 || grid[row][col-1] === 0){
        area++;
    }else {
        helper(grid,row, col-1)
    }
    if(row === grid.length-1 || grid[row+1][col] === 0){
          area++;
      }else {
        helper(grid,row+1, col)
      }
    if(col === grid[0].length-1 || grid[row][col+1] ===0){
         area++;
     }else {
         helper(grid,row, col+1)
     }
  }else{
      return
  }
};
    

 for(let i =0; i<grid.length; i++){
  for(let j=0; j<grid[0].length; j++){
    if(grid[i][j] === 1){
      helper(grid, i, j, area);
      flag = true;
      break;
    }
  }
  if(flag) break;
 }
    
 return area   
 
}