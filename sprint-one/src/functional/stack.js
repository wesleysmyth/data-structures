var Stack = function(){
  var someInstance = {};
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    counter++;
    storage[counter] = value;
  };

  someInstance.pop = function(){
    if (counter > 0) {
      var item = storage[counter];
      delete storage[counter];
      counter--;
      return item;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
