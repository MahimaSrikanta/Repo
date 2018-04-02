// Finds cycle in undirected graph 

class Graph {
  constructor(vertex) {
    this.numberVertex = vertex;
    this.adjList = new Map();
  }
  
  addVertex(ver) {
    this.adjList.set(ver,[]);
  }
  addEdge(v,e) {
    this.adjList.get(v).push(e);
    //for undirected Graph
   // this.adjList.get(e).push(v);
  }
  
  printGraph() {
    
    var keySet = this.adjList.keys();
    for(var k of keySet) {
   
      console.log(`${k} --> ${this.adjList.get(k)}`);
    }
  }
  detectCycle(start) {
    var visited = {}
    // for(var key of this.adjList.keys()) {
    //   visited[key] = false;
    // }
    var stack = [start];
    visited[start] = true;
    
    while(stack.length !== 0) {
      // console.log(stack)
      var node = stack.shift();
     console.log(node);
      
      for(var val of this.adjList.get(node)) {
        if(visited[val] === undefined) {
          stack.unshift(val);
          visited[val] = true;
        }else {
         
            return true;   // Cycle found
        }
      }
    }
    return false
  }
}

var g = new Graph(4);
var vertices = [ 0, 1, 2, 3 ];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}  
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
   // g.addEdge(2, 0);
    g.addEdge(2, 3);
   // g.addEdge(3, 3);
    g.printGraph();
    
    g.detectCycle(0)