const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    const newNode = new Node(value);
    if (!list.tail) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    const headVal = list.head.value;
    list.head = list.head.next;
    return headVal;
  };

  list.contains = function(target) {
    //while current node doesn't equal null, continue to the next node.
    //starts at list.head, checks for value
    //list.head does not have value, check list.head.next
    let currentNode = list.head;
    //Use while loop(style choice)
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
    // let result = false;
    // const checkNode = function(node, target) {
    //   if (node.value === target) {
    //     result = true;
    //   } else {
    //     if (node.next) {
    //       checkNode(node.next, target);
    //     }
    //   }
    // };
    // checkNode(currentNode, target);
    // return result;
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .addToTail and .removeHead = constant, .contains = linear
 */
