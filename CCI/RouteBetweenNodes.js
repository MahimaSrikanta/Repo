/*
Find if there is a path between two vertices in a directed graph
Given a Directed Graph and two vertices in it, check whether there is a path from the first given vertex to second. For example, in the following graph, there is a path from vertex 1 to 3. As another example, there is no path from 3 to 0.

*/
function DirectedGraphNode(label) {
  this.label = label;
  this.neighbors = [];   // Array of directedGraphNode
}

DirectedGraphNode.prototype.addNeighbors = function (node) {
  this.neighbors.push(node); 
}

var PathBetweenNodes = function (graph, start, end) {
  var Visited = {};
  var queue = [];
  queue.push(start);
  
  while(queue.length !== 0) {
    var temp = queue.shift();
    
    Visited[temp.label] = 1;

    for(var i =0; i< temp.neighbors.length; i++) {
    
      if(temp.neighbors[i].label === end.label) {
        return true;
      } else if(Visited[temp.neighbors[i].label] === undefined) {
        queue.push(temp.neighbors[i]);
      
      }
    }
  }
  console.log(Visited)
  return false;
  
}



var a = new DirectedGraphNode(0);
var b = new DirectedGraphNode(1);
var c = new DirectedGraphNode(2);
var d = new DirectedGraphNode(3);

a.neighbors.push(b,c);
b.neighbors.push(c);
c.neighbors.push(a,d);
d.neighbors.push(d);
//console.log(a)
PathBetweenNodes(a,b,a)