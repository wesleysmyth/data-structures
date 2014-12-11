var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.enqueueCounter = 0;
  this.dequeueCounter = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
    this.storage[this.enqueueCounter] = value;
    this.enqueueCounter++;
  };

Queue.prototype.dequeue = function(){
  if (this.enqueueCounter-this.dequeueCounter > 0) {
    var result = this.storage[this.dequeueCounter];
    delete this.storage[this.dequeueCounter];
    this.dequeueCounter++;
    return result;
  }
};

Queue.prototype.size = function(){
  return (this.enqueueCounter-this.dequeueCounter);
};

