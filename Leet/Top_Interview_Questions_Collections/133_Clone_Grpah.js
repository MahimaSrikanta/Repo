/*
Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.


OJ's undirected graph serialization:
Nodes are labeled uniquely.

We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
As an example, consider the serialized graph {0,1,2#1,2#2,2}.

The graph has a total of three nodes, and therefore contains three parts as separated by #.

First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
Second node is labeled as 1. Connect node 1 to node 2.
Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
Visually, the graph looks like the following:

       1
      / \
     /   \
    0 --- 2
         / \
         \_/

         */

//Not accepted

function UndirectedGraphNode(label) {
  this.label = label;
  this.neighbors = [];   // Array of UndirectedGraphNode
}

UndirectedGraphNode.prototype.addNeighbors = function (node) {
  this.neighbors.push(node); 
}

var cloneGraph = function(graph) {
  if(graph === null) {
    return null;
  }
 // console.log(graph)
  var hash = {};
  var queue = [];
  var newHead = new UndirectedGraphNode(graph.label);
    
  queue.push(graph);
  hash [graph.val] = newHead;
  
  while(queue.length !== 0) {
    var head = queue.shift();
    var currNeighbors = head.neighbors;
   
    for(var i=0;i<currNeighbors.length; i++) {
      if(hash[currNeighbors[i].label] === undefined) {
        var newNode = new UndirectedGraphNode(currNeighbors[i].label);
        hash[currNeighbors[i].label] = newNode;
        hash[head.val].neighbors.push(newNode);
        queue.push(currNeighbors[i]);
        console.log(queue)
      } else {
      // hash[head.val].neighbors.push(hash[currNeighbors[i].label]);
      }
      
    }
  }
  
  return newHead;
};

var a = new UndirectedGraphNode(0);
var b = new UndirectedGraphNode(1);
var c = new UndirectedGraphNode(2);

a.neighbors.push(b,c);
b.neighbors.push(c);
c.neighbors.push(c);

cloneGraph(a)
