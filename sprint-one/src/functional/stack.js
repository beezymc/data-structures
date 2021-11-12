var Stack = function() {
  var someInstance = {};
  var key = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
    var lastInLine = 0;
    for (var key in storage) {
      if (key > lastInLine) {
        lastInLine = key;
      }
    }
    var popped = storage[lastInLine];
    delete storage[lastInLine];
    return popped;
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
