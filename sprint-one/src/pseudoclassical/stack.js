var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
  this.storage = {};
};

Stack.prototype.size = function () {
  var storageSize = 0;
  for (var key in this.storage) {
    storageSize++;
  }
  return storageSize;
};

Stack.prototype.push = function (value) {
  this.storage[this.key] = value;
  this.key++;
};

Stack.prototype.pop = function () {
  var lastInLine = 0;
  for (var key in this.storage) {
    if (key > lastInLine) {
      lastInLine = key;
    }
  }
  var popped = this.storage[lastInLine];
  delete this.storage[lastInLine];
  return popped;
};
