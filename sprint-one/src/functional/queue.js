var Queue = function() {
  var someInstance = {};
  var key = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    var firstInLine = 9007199254740991;
    for (var key in storage) {
      if (key < firstInLine) {
        firstInLine = key;
      }
    }
    var dequeued = storage[firstInLine];
    delete storage[firstInLine];
    return dequeued;
  };

  someInstance.size = function() {
    var storageSize = 0;
    for (var item in storage) {
      storageSize++;
    }
    return storageSize;
  };

  return someInstance;
};
