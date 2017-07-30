/*
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.

Note: m and n will be at most 100.
*/

//Page 135

//Time complexity O(n^2)
var uniquePathsWithObstacles = function(obstacleGrid) {
  //trivial
  for(var i=0; i<obstacleGrid.length; i++) {
    if(obstacleGrid[i][0] !== "*") {
      obstacleGrid[i][0] = 1;
    }else {
      obstacleGrid[i][0] = 0;
    }
  }
  
  for(var i=0; i<obstacleGrid.length; i++) {
    if(obstacleGrid[0][i] !== "*") {
      obstacleGrid[0][i] = 1;
    }
    else {
      obstacleGrid[0][i] = 0;
    }
  }
  
  for(var j =1; j<obstacleGrid.length; j++) {
    for(var k = 1; k<obstacleGrid.length; k++) {
      if(obstacleGrid[j][k] !== "*") {
        var up =0;
        var right = 0;
        
       obstacleGrid[j][k] = obstacleGrid[j-1][k] + obstacleGrid[j][k-1]
      } else {
        obstacleGrid[j][k] =0;
      }
    }
  }
  console.log(obstacleGrid);
  return obstacleGrid[obstacleGrid.length-1][obstacleGrid.length-1]
};
var mat = [
  [0,"*",0],
  [0,'*',0],
  [0,0,0]
];
uniquePathsWithObstacles(mat)