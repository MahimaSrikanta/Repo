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
      this.adjList.get(e).push(v);
    }
    
    printGraph() {
      
      var keySet = this.adjList.keys();
      for(var k of keySet) {
     
        console.log(`${k} --> ${this.adjList.get(k)}`);
      }
    }
  }
  // Using the above implemented graph class
  var g = new Graph(6);
  var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
   
  // adding vertices
  for (var i = 0; i < vertices.length; i++) {
      g.addVertex(vertices[i]);
  }
   
  // adding edges
  g.addEdge('A', 'B');
  g.addEdge('A', 'D');
  g.addEdge('A', 'E');
  g.addEdge('B', 'C');
  g.addEdge('D', 'E');
  g.addEdge('E', 'F');
  g.addEdge('E', 'C');
  g.addEdge('C', 'F');
  
  console.log("Print Graph ==============")
  g.printGraph();