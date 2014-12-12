var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target){
  // check if 'this' value is === target
  if (this.value === target) {
    return true;
  // else recurse through each child of 'this' node
  } else {
    for (var i = 0; i < this.children.length; i++) {
      // for each child, capture result of recursive call to var result
      var result = this.children[i].contains(target);
      //if result === true (one of child's descendents contains target)
      if (result) {
        // bubble up found true
        return true;
      }
    }
  }
  // if, no descendents contain target, bubble up "not found"
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
