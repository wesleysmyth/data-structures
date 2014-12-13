var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // take input 'k' and stores the result of calling the hash function into 'i'
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if (this._storage.get(i) === undefined), then create a new array, push {k:v}, then set to index i
  if (this._storage.get(i) === undefined) {
    var pairs = [];
    pairs.push({k:v});
  } else {
    var pairs = this._storage.get(i);
    pairs.push({k:v});
  }
  this._storage.set(i, pairs);
  console.log(this._storage);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if this._storage.get(i) is an array, store the result of calling this._storage.get(i) in a variable, iterate over array to retrieve value stored at k if k exists

  if (Array.isArray(this._storage.get(i))) {
    var pairs = this._storage.get(i);
    for (var j = 0; j<pairs.length; j++) {
      if (pairs[j][k]) {
        return pairs[j][k];
      }
    }
    // return this._storage.get(i);
  }


};

HashTable.prototype.remove = function(k){
  this.insert(k, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
