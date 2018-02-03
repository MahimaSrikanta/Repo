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
  detectCycle() {
   var white = [], gray =[], black=[];
   for(var keys of this.adjList.keys()) {
     white.push(keys);

   }
   
   while(white.length !==0) {
    if( this.dfsDetectCycle(white[0], white, gray, black)){
      return true;
    }
   }
   return false;
  }
   
   dfsDetectCycle (curr, white, gray,black) {
     this.moveCurr(curr, white, gray);
     for(var neigh of this.adjList.get(curr)){
       if(black.indexOf(neigh) !== -1) {  // already explored
         continue;
       }
       if(gray.indexOf(neigh) !== -1) {
         return true
       }
       this.dfsDetectCycle(neigh, white, gray, black)
     }
     this.moveCurr (curr, gray, black);
     return false;
   }
   
   moveCurr (curr, list1, list2) {
     var index = list1.indexOf(curr);
     list1.splice(index,1);
    // console.log(list2, list1)
     list2.push(curr);
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