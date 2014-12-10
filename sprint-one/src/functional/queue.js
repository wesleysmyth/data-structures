var Queue = function(){
  var someInstance = {};
  var enqueueCounter = 0;
  var dequeueCounter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[enqueueCounter] = value;
    enqueueCounter++;
  };

  someInstance.dequeue = function(){
    if (enqueueCounter-dequeueCounter > 0) {
      var result = storage[dequeueCounter];
      delete storage[dequeueCounter];
      dequeueCounter++;
      return result;
    }
  };

  someInstance.size = function(){
    return (enqueueCounter-dequeueCounter);
  };

  return someInstance;
};
