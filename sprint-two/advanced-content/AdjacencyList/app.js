// this line lets you access the file system. You'll learn more about it later in the course
var fs = require('fs');

// read the `adjacency-list` file in this directory (you might have named the file differently) and split it on new lines into an array
var fileLines = fs.readFileSync('./list.txt').toString().split('\n');

// you may have to do this 0 or more times, to remove blank lines from fileLines
fileLines.pop();

fileLines.forEach(function(line) {
  // here you have access to each line of the adjacency list
  console.log(line);
});