const BinarySearchTree = function(value) {
  const binarySearchTree = Object.create(bstPrototype);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  binarySearchTree.nodes = {};
  return binarySearchTree;
};

var bstPrototype = {};

bstPrototype.insert = function(newValue) {
  const newTree = BinarySearchTree(newValue);
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

bstPrototype.contains = function(target, treeNode = this) {
  //Base Case
  // if treeNode.value is target, return true.
  if (treeNode.value === target) {
    return true;
  }
  //Recursive Step
  //if treeNode.left !== null && target < treeNode.value)
  // return recur left
  //if treeNode.right !== null
  // return recur right
  if (treeNode.left !== null && target < treeNode.value) {
    return this.contains(target, treeNode.left);
  } else if (treeNode.right !== null) {
    return this.contains(target, treeNode.right);
  } else {
    return false;
  }

  //return false
  // let result = false;
  // const searchThroughTree = function(treeNode, target) {
  //   if (treeNode === null) {
  //     return;
  //   } else if (treeNode.value === target) {
  //     result = true;
  //   } else {
  //     if (target < treeNode.value) {
  //       searchThroughTree(treeNode.left, target);
  //     } else {
  //       searchThroughTree(treeNode.right, target);
  //     }
  //   }
  // };
  // searchThroughTree(this, target);
  return result;
};

bstPrototype.depthFirstLog = function(cb, treeNode = this) {
  if (treeNode === null) {
    return;
  }
  cb(treeNode.value);
  this.depthFirstLog(cb, treeNode.left);
  this.depthFirstLog(cb, treeNode.right);
  // const depthFirst = function(treeNode, cb) {
  //   if (treeNode === null) {
  //     return;
  //   }
  //   cb(treeNode.value);
  //   depthFirst(treeNode.left, cb);
  //   depthFirst(treeNode.right, cb);
  // };
  // depthFirst(this, cb);
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Insert: O(log(N))
 * Contains: O(log(N))
 * DepthFirstLog: Best Case O(N), depends on cb
 */
