var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.key = 0;
  return someInstance;
};

var stackMethods = {
  size: function () {
    var storageSize = 0;
    for (var key in this.storage) {
      storageSize++;
    }
    return storageSize;
  },
  push: function (value) {
    this.storage[this.key] = value;
    this.key++;
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


