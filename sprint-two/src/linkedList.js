var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null){
      list.head = Node(value);
    } else  {
      list.head.next =  Node(value);
    }

    list.tail = Node(value);

  };

  list.removeHead = function(){
    if (list.head){
      var formerHead = list.head.value;
      list.head = list.head.next;
      return formerHead;
    }
  };

  list.contains = function(target, node){
    // debugger;
    var nextItem = node === undefined ? list.head : node.next;
    console.log(nextItem);

    if (nextItem.value === target) {
      return true;

    } else if (node.next === null)  {
      return false;
    }
      list.contains(target, nextItem);
  };

    return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null
      }
    }
  },
  tail: {
     value: 3,
    next: null
  }
};


