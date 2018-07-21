//Given a weighted directed graph and a source vertex, find the shortes path from source to all vertices

/*
  Logic: (BFS) start from source  push it to queue. while queue is not empty, shift the first node from queue 
  and set it as "curr", loop through all the adj vertex of "curr". For each vertex , 
  check if its already present in result Hashmap. if No,then save the vertex as key and its weight 
  from the curr node + curr Node's weight from source as the value. If yes, then check if the already present value is 
  smaller then the curr node + curr Node's weight. save the min value 
  return the result Hashmap

  
*/
class Graph {
    constructor(vertex) {
        this.numberVertex = vertex;
        this.adjList = new Map();
    }

    addVertex(ver) {
        this.adjList.set(ver, []);
    }
    addEdge(v, e, weight) {
        //saved as tuple with edge and weight
        this.adjList.get(v).push([e, weight]);
        //for undirected Graph
        //this.adjList.get(e).push(v);
    }

    printGraph() {

        var keySet = this.adjList.keys();
        for (var k of keySet) {
            console.log(`${k} --> ${this.adjList.get(k)}`);
        }
    }
}

function dijkstra(g, src) {
    let queue = [src];
    let resultHash = {};
    let visited = {};

    resultHash[src] = 0;
    while (queue.length !== 0) {
        let curr = queue.shift();
        for (k of g.adjList.get(curr)) {
            if (!resultHash[k[0]]) {
                resultHash[k[0]] = resultHash[curr] + k[1];
            } else {
                let value = resultHash[k[0]] < (resultHash[curr] + k[1]) ? resultHash[k[0]] : (resultHash[curr] + k[1]);
                resultHash[k[0]] = value;
            }
            if (!visited[k[0]]) {
                visited[k[0]] = true;
                queue.push(k[0]);
            }
        }

    }
    return resultHash;

}
// Using the above implemented graph class
var g = new Graph(6);
var vertices = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges with weights
g.addEdge('0', '1', 4);
g.addEdge('0', '7', 8);
g.addEdge('1', '2', 8);
g.addEdge('1', '7', 11);
g.addEdge('7', '8', 7);
g.addEdge('7', '6', 1);
g.addEdge('2', '8', 2);
g.addEdge('2', '3', 7);
g.addEdge('2', '5', 4);
g.addEdge('8', '6', 6);
g.addEdge('6', '5', 2);
g.addEdge('5', '3', 14);
g.addEdge('5', '4', 10);
g.addEdge('3', '4', 9);

console.log("Print Graph ==============")
g.printGraph();
dijkstra(g, '0')

