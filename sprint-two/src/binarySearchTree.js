var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(bstPrototype);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  binarySearchTree.nodes = {};
  return binarySearchTree;
};

var bstPrototype = {};

bstPrototype.insert = function(newValue) {
  let newTree = BinarySearchTree(newValue);

  const recurThroughTree = function(treeNode) {
    if (treeNode.left === null && newTree.value < treeNode.value) {
      treeNode.left = newTree;
    } else if (treeNode.right === null && newTree.value >= treeNode.value) {
      treeNode.right = newTree;
    } else {
      if (newTree.value < treeNode.value) {
        recurThroughTree(treeNode.left);
      } else {
        recurThroughTree(treeNode.right);
      }
    }
  };
  recurThroughTree(this);
};

bstPrototype.contains = function(target) {
  let result = false;
  const searchThroughTree = function(treeNode, target) {
    if (treeNode === null) {
      return;
    } else if (treeNode.value === target) {
      result = true;
    } else {
      if (target < treeNode.value) {
        searchThroughTree(treeNode.left, target);
      } else {
        searchThroughTree(treeNode.right, target);
      }
    }
  };
  searchThroughTree(this, target);
  return result;
};

bstPrototype.depthFirstLog = function(cb) {
  const depthFirst = function(treeNode, cb) {
    if (treeNode === null) {
      return;
    }
    cb(treeNode.value);
    depthFirst(treeNode.left, cb);
    depthFirst(treeNode.right, cb);
  };
  depthFirst(this, cb);
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Insert: O(log(N))
 * Contains: O(log(N))
 * DepthFirstLog: Best Case O(N), depends on cb
 */
