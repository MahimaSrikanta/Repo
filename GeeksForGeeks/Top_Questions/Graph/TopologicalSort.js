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
  
  }
  
  printGraph() {
    
    var keySet = this.adjList.keys();
    for(var k of keySet) {
   
      console.log(`${k} --> ${this.adjList.get(k)}`);
    }
  }
  
  topologicalSort() {
    var visited = {};
    var stack =[];
    var bucket = [];
    for(var keys of this.adjList.keys()){
      if(visited[keys]){
        continue;
      }
      this.topSort(keys, visited, stack)
    }
    console.log(stack)
  }
  
  topSort(key, visited, stack) {
   // this.move(key, bucket);
       visited[key]=1;
   //console.log(key)
    for(var neigh of this.adjList.get(key)) {
   //   this.move(neigh, bucket);
  
      if(visited[neigh]){
       continue; 
      }
      this.topSort(neigh, visited, stack);
      
    }
    
    stack.unshift(key);
  }

  

}

var g = new Graph(6);
var vertices = [ 0, 1, 2, 3, 4, 5 ];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}  
  //  g.addEdge(0, 1);
    g.addEdge(5, 2);
    g.addEdge(5, 0);
    g.addEdge(4, 0);
    g.addEdge(4, 1);
    g.addEdge(2, 3);
    g.addEdge(3, 1);
    g.printGraph();
    
    g.topologicalSort(0)