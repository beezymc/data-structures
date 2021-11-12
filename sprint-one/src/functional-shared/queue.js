var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.key = 0;
  someInstance.storage = {};
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
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
  dequeue: function () {
    var firstInLine = 9007199254740991;
    for (var key in this.storage) {
      if (key < firstInLine) {
        firstInLine = key;
      }
    }
    var dequeued = this.storage[firstInLine];
    delete this.storage[firstInLine];
    return dequeued;
  }
};


