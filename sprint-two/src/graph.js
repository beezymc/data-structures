// Instantiate a new graph
var Graph = function(value) {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
  // this.edges.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] !== undefined;
  // if (Object.keys(this.nodes).includes(JSON.stringify(node))) {
  //   return true;
  // } else {
  //   return false;
  // }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //check this.nodes[node]'s keys
  const nodeConnections = Object.keys(this.nodes[node]);
  //for each key go to this.nodes[key]
  for (let i = 0; i < nodeConnections.length; i++) {
    delete this.nodes[nodeConnections[i]][node];
  }
  //remove this.nodes[key][node]
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.nodes[fromNode][toNode] === null) && (this.nodes[toNode][fromNode] === null);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = null;
  this.nodes[toNode][fromNode] = null;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .addNode, .addEdge, .removeEdge, .contains, .hasEdge = constant
 * .removeNode, = linear
 * .forEachNode = linear (best case), depends on callback
 */


