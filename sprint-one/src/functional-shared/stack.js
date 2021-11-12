var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.key = 0;
  someInstance.storage = {};
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },
  size: function () {
    var storageSize = 0;
    for (var item in this.storage) {
      storageSize++;
    }
    return storageSize;
  },
  pop: function () {
    var lastInLine = 0;
    for (var key in this.storage) {
      if (key > lastInLine) {
        lastInLine = key;
      }
    }
    var popped = this.storage[lastInLine];
    delete this.storage[lastInLine];
    return popped;
  }
};


