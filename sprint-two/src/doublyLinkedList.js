var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.storage = [];

  // we store nodes as properties of other nodes (more specifically, the next and previous keys)

  list.addToTail = function(value){
    // if both list.head && list.tail === null, list is empty, set both list.head and list.tail = node(value)
    //
    // if adding to tail and list.tail, set previous property = the former tail node

    if (list.storage.length === 0){
      list.head = Node(value);
      list.tail = Node(value);
      // opportunity to refactor DRY
    } else if (list.storage.length === 1) {
      var formerTail = list.tail;
      list.tail = Node(value);
      list.tail.previous = formerTail;
      list.head.next = Node(value);
    } else {
      var formerTail = list.tail;
      list.tail = Node(value);
      list.tail.previous = formerTail;
      formerTail.next = Node(value);
    }
    list.storage.push(list.tail.value);
  };

  list.removeHead = function(){
    // if there's just 1 node (list.head===list.tail)
    if (list.storage.length === 1) {
      // delete the node
      delete list.head;
      // set list.head and list.nail ===null
      list.head = null;
      list.tail = null;
      // remove value from storage, return value
      return list.storage.shift();
    } else {
      var formerHead = list.head;
      delete list.head;
      list.head = formerHead.next;
      console.log(list.head);
      list.head.previous = null;
      return list.storage.shift();
    }
  };

  list.addToHead = function(value) {
    // same comments as addToTail
    if (list.storage.length === 0){
      list.head = Node(value);
      list.tail = Node(value);
    } else if (list.storage.length === 1) {
      var formerHead = list.head;
      list.head = Node(value);
      list.head.next = formerHead;
      list.tail.previous = Node(value);
    } else {
      var formerHead = list.head;
      list.head = Node(value);
      list.head.next = formerHead;
      formerHead.previous = Node(value);
    }
    list.storage.unshift(list.head.value);

  };

  list.removeTail = function() {
    if (list.storage.length === 1) {
      delete list.tail;
      list.tail = null;
      list.tail = null;
      return list.storage.pop();
    } else {
      var formerTail = list.tail;
      delete list.tail;
      list.tail = formerTail.previous;
      console.log(list.tail);
      list.tail.next = null;
      return list.storage.pop();
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
