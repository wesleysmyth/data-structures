var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  //obj.__proto__ = queueMethods;  -- interesting!!
  obj.storage = {};
  obj.enqueueCounter = 0;
  obj.dequeueCounter = 0;
  return obj;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.enqueueCounter] = value;
    this.enqueueCounter++;
  },

  dequeue: function(){
    if (this.enqueueCounter-this.dequeueCounter > 0) {
      var result = this.storage[this.dequeueCounter];
      delete this.storage[this.dequeueCounter];
      this.dequeueCounter++;
      return result;
    }
  },

  size: function(){
    return (this.enqueueCounter-this.dequeueCounter);
  }
};

//console.log(queueMethods.__proto__);

