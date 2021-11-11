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
  // If root (first to be added)
  let childTree = Tree(value);
  //console.log(childTree);
  //console.log(Tree);
  if (this.children.length === 0) {
    this.children.push(childTree);
    console.log(childTree);
  }
};

treeMethods.contains = function(target) {
//   let currentNode = list.head;
//   let result = false;
//   const checkNode = function(node, target) {
//     if (node.value === target) {
//       result = true;
//     } else {
//       if (node.next !== null) {
//         checkNode(node.next, target);
//       }
//     }
//   };
//   checkNode(currentNode, target);
//   return result;
// };
//   return list;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
