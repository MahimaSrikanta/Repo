var Graph = function(value) {
  this.val = value;
  this.neighbors = [];
  this.visited = false;
}

Graph.prototype.addNeighbors = function (neighborArray) {
  for(var i =0; i< neighborArray.length; i++) {
    this.neighbors.push(neighborArray[i])
  }
}

var graphBFS = function (root) {
  var queue = [];
  queue.push(root)
  root.visited = true;
  
  while(queue.length !==0) {
    var node = queue.shift();
    console.log(node.val)
   
    for(var i =0; i<node.neighbors.length; i++) {
      if(!node.neighbors[i].visited) {
        queue.push(node.neighbors[i]);
         node.neighbors[i].visited = true;
      } 
    }
    
  }
}


var graphDFS = function (root) {
  var stack = [];
  stack.push(root)
  root.visited = true;
  
  while(stack.length !==0) {
    var node = stack.pop();
    console.log(node.val)
   
    for(var i =0; i<node.neighbors.length; i++) {
      if(!node.neighbors[i].visited) {
        stack.push(node.neighbors[i]);
         node.neighbors[i].visited = true;
      } 
    }
    
  }
}

var G = new Graph(1);
var g2 = new Graph(2);
var g3 = new Graph(3);
var g4 = new Graph(4);
var g5 = new Graph(5);
var g6 = new Graph(6);

G.addNeighbors([g5,g2]);
g2.addNeighbors([g3]);
g3.addNeighbors([g4]);
g4.addNeighbors([g6]);
g5.addNeighbors([g2,g4])

var adjacentList = {
  "1":["2","5"],
  "2":["3"],
  "3":["4"],
  "4":["6"],
  "5":["4","2"]
};
//console.log(graphBFS(G));
console.log(graphDFS(G));

//console.log(JSON.stringify(G))