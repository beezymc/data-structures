class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.key = 0;
    this.storage = {};
  }

  size() {
    var storageSize = 0;
    for (var key in this.storage) {
      storageSize++;
    }
    return storageSize;
  }

  push(value) {
    this.storage[this.key] = value;
    this.key++;
  }

  pop() {
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
}