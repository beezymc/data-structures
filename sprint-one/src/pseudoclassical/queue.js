var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
  this.storage = {};
};

Queue.prototype.size = function () {
  var storageSize = 0;
  for (var key in this.storage) {
    storageSize++;
  }
  return storageSize;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.key] = value;
  this.key++;
};

Queue.prototype.dequeue = function () {
  var firstInLine = 9007199254740991;
  for (var key in this.storage) {
    if (key < firstInLine) {
      firstInLine = key;
    }
  }
  var dequeued = this.storage[firstInLine];
  delete this.storage[firstInLine];
  return dequeued;
};

