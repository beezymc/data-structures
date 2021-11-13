// this line lets you access the file system. You'll learn more about it later in the course
var fs = require('fs');
const Graph = require('../../src/graph.js');
const chameleon = require('./adj-list-transform.js');


// read the `adjacency-list` file in this directory (you might have named the file differently) and split it on new lines into an array
var fileLines = fs.readFileSync('./list.txt').toString().split('\n');
const parsedFileLines = [];
for (let i = 0; i < fileLines.length; i++) {
  parsedFileLines.push(JSON.parse(fileLines[i]));
}
console.log(parsedFileLines);
// you may have to do this 0 or more times, to remove blank lines from fileLines

// fileLines.forEach(function(line) {
//   // here you have access to each line of the adjacency list


// });

const newGraph = new Graph();
for (let i = 0; i < parsedFileLines.length; i++) {
  newGraph.addNode(i);
}
for (let i = 0; i < parsedFileLines.length; i++) {
  for (let j = 0; j < parsedFileLines[i].length; j++) {
    newGraph.addEdge(i, parsedFileLines[i][j]);
  }
}

const depthFirst = function(graph, firstNode = '1') {
  const visited = [];
  const depthFirstLog = function(graph, node) {
    if (visited.includes(node)) {
      return;
    } else {
      console.log(node);
      visited.push(node);
      for (let edge in graph.nodes[node]) {
        depthFirstLog(graph, edge);
      }
    }


  };
  depthFirstLog(graph, firstNode);
};

depthFirst(chameleon);