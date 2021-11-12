

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    console.log(this._storage.get(index));
    var bucket = this._storage.get(index);
    var inBucket = false;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        inBucket = true;
      }
    }
    if (!inBucket) {
      var tuple = [k, v];
      this._storage.get(index).push(tuple);
    }
  } else {
    var bucket = [];
    var tuple = [k, v];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Constant for setting and retriving and removing
 */


