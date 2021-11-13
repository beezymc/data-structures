var fs = require('fs');
// let edgeList = require('./musae_chameleon_edges.txt');
const Graph = require('../../src/graph.js');

var edges = fs.readFileSync('./musae_chameleon_edges.txt').toString().split('\n');

const newGraph = new Graph();

edges.forEach(function(item) {
  let tuple = item.split(',');
  if (!newGraph.nodes[tuple[0]]) {
    newGraph.addNode(tuple[0]);
  }
});

edges.forEach(function(item) {
  let tuple = item.split(',');
  newGraph.addEdge(tuple[0], tuple[1]);
});

module.exports = newGraph;