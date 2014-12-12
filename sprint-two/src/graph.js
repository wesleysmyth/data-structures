var Graph = function(){
  this.storage = [];
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  this.storage.push(node);
};

Graph.prototype.contains = function(node){
  return this.storage.indexOf(node) >=0;
};

Graph.prototype.removeNode = function(node) {
  var graphNumber = this.storage.indexOf(node);
  this.storage.splice(graphNumber,1);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // when we add an edge between fromNode and toNode, we add a fromNode property to the edges object with a key of an array that contains the toNode

  if (!this.edges[fromNode]) {
    this.edges[fromNode] = [];
    this.edges[fromNode].push(toNode);

  } else {
    this.edges[fromNode].push(toNode);
  }

  if (!this.edges[toNode]) {
    this.edges[toNode] = [];
    this.edges[toNode].push(fromNode);
  } else {
    this.edges[toNode].push(fromNode);
  }

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  // determine if the edges object has a fromNode property, if so, look for toNode in that array
  console.log(this.edges);
  return this.edges[fromNode].indexOf(toNode) >= 0;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // find the fromNode property inside this.edges, look for the toNode property inside of the array and delete it
  this.edges[fromNode].splice(this.edges[fromNode].indexOf(toNode),1);
  this.edges[toNode].splice(this.edges[toNode].indexOf(fromNode),1);
};

Graph.prototype.forEachNode = function(cb){
  // iterate over storage to find each node, and apply the callback to each node in the storage array
  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
