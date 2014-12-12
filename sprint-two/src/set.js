var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //  take an item and set this._storage[item] = item
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  // check this._storage[item]
  // return this._storage[item] will return Boolean value saying whether or not it exists in this._storage
  return this._storage[item] === item;

};

setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
