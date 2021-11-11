var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  let currentNode = this;
  let result = false;
  const checkNode = function(node, target) {
    if (node.value === target) {
      result = true;
    } else {
      if (node.children.length !== 0) {
        for (let i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], target);
        }
      }
    }
  };
  checkNode(currentNode, target);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
