/*
  Logic: Have a vistedHash  to track all the visited nodes . For BFS use queue and for DFS use stack
  Time complexity: O(V+E), space complexiy=O(V)
*/

class Graph {
    constructor(vertex) {
        this.numberVertex = vertex;
        this.adjList = new Map();
    }

    addVertex(ver) {
        this.adjList.set(ver, []);
    }
    addEdge(v, e) {
        this.adjList.get(v).push(e);
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

function BFS(g, start) {
    let visitedHash = {};
    let queue = [start];
    visitedHash[start] = true

    while (queue.length !== 0) {
        let node = queue.shift();
        console.log(node)
        for (vertex of g.adjList.get(node)) {
            if (!visitedHash[vertex]) {
                queue.push(vertex);
                visitedHash[vertex] = true;
            }
        }
    }

}

function DFS(g, start) {
    let stack = [start];
    let visitedHash = {}
    visitedHash[start] = true;
    while (stack.length !== 0) {
        let node = stack.pop();
        console.log(node)
        for (k of g.adjList.get(node)) {
            if (!visitedHash[k]) {
                stack.push(k);
                visitedHash[k] = true;
            }
        }
    }
}
// Using the above implemented graph class
var g = new Graph(6);
var vertices = ['0', '1', '2', '3'];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('0', '2');
g.addEdge('0', '1');
g.addEdge('2', '1');
g.addEdge('2', '3');
g.addEdge('2', '0');

console.log("Print Graph ==============")
g.printGraph();
console.log("==============")
BFS(g, '2');
console.log("==============")
DFS(g, '2')
