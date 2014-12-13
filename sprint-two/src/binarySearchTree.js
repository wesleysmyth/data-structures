var BinarySearchTree = function(value){
  var binarySearchTree = {};
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  binarySearchTree.value = value;

// Add methods to the binary seach tree prototype property
  binarySearchTree.insert = function(value){
  // Creates newTree variable to hold a new instance of a binary search tree with the passed in value
    var node = BinarySearchTree(value);
    // console.dir(binarySearchTree.value + ":" + this.value);
    // if this.value > value && this.left === null, then this.left.push(newTree)
    if (this.value > value && this.left === null) {
      this.left = node;
    } else if (this.value > value && this.left) {
      this.left.insert(value);
    } else if (this.value < value && this.right === null) {  // if this.value < value && this.right === null , then this.right.push(newTree)
      this.right = node;
    } else if (this.value < value && this.right) {
      this.right.insert(value);
    }
  };

  binarySearchTree.contains = function(value){

  // if this.value === value return true
    // else if this.value > value
    // this.left.contains(value)
    // else if this.value < value
    // this.right.contains(value)
    // else return false
    if (this.value === value) {
      return true;
    } else if (this.value > value && this.left) {
      var result = this.left.contains(value);
      return result;
    } else if (this.value < value && this.right) {
      var result = this.right.contains(value);
      return result;
    } else {
      return false;
    }

  };

  binarySearchTree.depthFirstLog = function(callback){
    callback(this.value);
    //if (this.left) recursively call this.left.depthFirstLog(callback)
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    // if (this.right) recursively call this.right.depthFirstLog(callback)
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  };

  return binarySearchTree;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
