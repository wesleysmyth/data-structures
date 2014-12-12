var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.storage = [];

  list.addToTail = function(value){
    if (list.head === null){
      list.head = Node(value);
    } else  {
      list.head.next =  Node(value);
    }

    list.tail = Node(value);
    list.storage.push(list.tail.value);
  };

  list.removeHead = function(){
    if (list.head){
      var formerHead = list.head.value;
      list.head = list.head.next;
      list.storage.shift();
      return formerHead;
    }
  };

  list.contains = function(target){
    return list.storage.indexOf(target) >= 0;
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
