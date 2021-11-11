var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    let headVal = list.head.value;
    list.head = list.head.next;
    return headVal;
  };

  list.contains = function(target) {
    //while current node doesn't equal null, continue to the next node.
    //starts at list.head, checks for value
    //list.head does not have value, check list.head.next
    let currentNode = list.head;
    console.log(list);
    const checkNode = function(node, target) {
      if (node.value === target) {
        console.log(typeof target);
        console.log(node.value, target);
        return true;
      } else {
        console.log('Hit else');
        console.log(node.next, target);
        if (node.next !== null) {
          checkNode(node.next, target);
        } else {
          return false;
        }
      }
    };
    return checkNode(currentNode, target);
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
 */
