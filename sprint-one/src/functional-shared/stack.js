var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.counter = 0;
  obj.storage = {};
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function(value){
    this.counter++;
    this.storage[this.counter] = value;
  },
  pop: function(){
    if (this.counter > 0) {
      var item = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter--;
      return item;
    }
  },
  size: function(){
    return this.counter;
  }
};

