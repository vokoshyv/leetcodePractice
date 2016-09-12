/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var Node = function(value){
  this.value = value;
  this.next = null;
}

var LinkedList = function(){
  this.head = null;
  this.tail = null;
  this.size = 0;
}

LinkedList.prototype.addToTail = function(value){
  var newNode = new Node(value);
  if (this.size === 0){
    this.head = this.tail = newNode;
    this.size++;
  } else {
    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.size++;
  }
}

LinkedList.prototype.removeFromHead = function(){
  if (this.size === 0){
    return 'LinkedList is empty';
  } else if (this.size === 1){
    var temp = this.head;
    this.head = null;
    this.tail = null;
    this.size = 0;
    return temp;
  } else {
    var temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    return temp;
  }
}


var maxSlidingWindow = function(nums, k) {
    
};