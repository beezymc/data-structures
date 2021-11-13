

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    const bucket = this._storage.get(index);
    var inBucket = false;
    bucket.forEach((tuple) => {
      if (tuple[0] === k) {
        tuple[1] = v;
        inBucket = true;
      }
    });
    // for (var i = 0; i < bucket.length; i++) {
    //   if (bucket[i][0] === k) {
    //     bucket[i][1] = v;
    //     inBucket = true;
    //   }
    // }
    if (!inBucket) {
      const tuple = [k, v];
      this._storage.get(index).push(tuple);
    }
  } else {
    const bucket = [];
    const tuple = [k, v];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //use for each unless we want the index to be going up more than one.
  //bucket.forEach((each) =>);
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


