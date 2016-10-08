/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  var Node = function(value){
    this.value = value;
    this.next = null;
  };

  var Queue = function(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  };

  Queue.prototype.enqueue = function(value){
    if (this.size === 0){
      this.head = this.tail = new Node(value);
      this.size++;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
      this.size++;
    }
  };

  Queue.prototype.dequeue = function(){
    if (this.size === 1){
      var toReturn = this.head;
      this.head = this.tail = null;
      this.size--;
      return toReturn;
    } else {
      var toReturn = this.head;
      this.head = this.head.next;
      this.size--;
      return toReturn;
    }
  };

  if (root === null){
    return 0;
  }

  var queue = new Queue();
  root.depth = 1;
  queue.enqueue(root);
  var currentNode;

  while (queue.size > 0){
    currentNode = queue.dequeue();

    if (currentNode.value.left === null && currentNode.value.right === null){
      return currentNode.value.depth;
    } 

    if (currentNode.value.left !== null){
      currentNode.value.left.depth = currentNode.value.depth + 1;
      queue.enqueue(currentNode.value.left);
    }
    if (currentNode.value.right !== null){
      currentNode.value.right.depth = currentNode.value.depth + 1;
      queue.enqueue(currentNode.value.right);
    }
  }
};





