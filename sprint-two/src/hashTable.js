

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.keys = {};
};

HashTable.prototype.insert = function(k, v) {
  //if the storage already has an item at a certain index, push the new value into the array;
  //else, create an item with the singular value at that index
  var index;
  if (this.keys[k]) {
    index = this.keys[k];
  } else {
    index = getIndexBelowMaxForKey(k, this._limit);
    if (this._storage.get(index) !== undefined) {
      while (this._storage.get(index) !== undefined) {
        var randomInt = (Math.floor(Math.random() * 8));
        index = randomInt;
      }
    }
  }
  this.keys[k] = index;
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index;
  if (Object.keys(this.keys).includes(k)) {
    index = this.keys[k];
  } else {
    index = getIndexBelowMaxForKey(k, this._limit);
  }
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


