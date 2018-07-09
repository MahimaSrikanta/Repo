
bfs = (start, graph)=>{
  // Keep track of visited nodes
  let visited ={};
  let queue =[];
  queue.push(start);
  visited[start]= true;

  while(queue.length >0){
    let node = queue.shift();
    console.log(node)
    let edges = graph.adjList.get(node);
    for(let i=0; i<edges.length; i++){
      //if not visited
      if(!visited[edges[i]]){
        visited[edges[i]] = true;
        queue.push(edges[i])
      }
    }
  }
}