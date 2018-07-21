
/*
  Logic: A loop is said to be present in the directed graph,
   if we hit a vertex  again which was already present in the path of exploration of all adjacent vertices from
   a vertex while doing DFS.

   Take a hash, make all the vertexes of graph as key and set their values as "W" (white, not explored yet)
   loop through all the keys(vertices) from hash and if they are still "W" call recursive DFS on that vertex and start
   exploring its adj nodes.

   Recursive DFS
   // base case. if there are no more adj nodes for a given particular node, then mark it as "B" in hash (black, all explored)
   if the hash has the vertex value is "W", then mark it as "G"(grey, currently being explored). loop all its adj nodes
   and call recursiveDFS on each of them, marking them "G" in the process if you hit a vertex which was already marked as "G",
   then that where the cycle is present.

   Time Complexity: O(n), Space Complexity: O(n)
         
             1 
            /  \
           4    2
          / \   /
          |  5  3
           \ /
            6
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

function detectCycle(g) {
    let hash = {};
    let vertices = g.adjList.keys();
    let result = false;
    for (let k of vertices) {
        hash[k] = 'W';
    }
    function RecursiveDFSHelper(g, hash, vertex) {
        //base case
        //if the vertex is not dependent on anything further then mark black
        if (g.adjList.get(vertex).length === 0) {
            hash[vertex] = 'B';
            return;
        }

        // if the vertex is White, then explore all its children or its dependencies and mark it as "G" to say its path is being explored.
        if (hash[vertex] === 'W') {
            hash[vertex] = 'G';
            let vertices = g.adjList.get(vertex);
            for (let k of vertices) {
                RecursiveDFSHelper(g, hash, k);
            }
        } else if (hash[vertex] === 'G') {
            result = true;
        }
    }
    //get all the vertices & mark white and start from one by one traversing DFS on them.
    Object.keys(hash).forEach(vertex => {
        if (hash[vertex] === 'W') {
            RecursiveDFSHelper(g, hash, vertex, result);
        }
    })
    return result;
}
// Using the above implemented graph class
var g = new Graph(6);
var vertices = ['1', '2', '3', '4', '5', '6'];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('1', '2');
g.addEdge('1', '4');
g.addEdge('2', '3');
g.addEdge('4', '5');
g.addEdge('5', '6');
g.addEdge('6', '4');
console.log("Print Graph ==============")
g.printGraph();
detectCycle(g)