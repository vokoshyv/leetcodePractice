 /********************************************************************************** 
  *                                 Homework IV                                    *
  *                                                                                *
  *  Problem: Linked List                                                          *
  *                                                                                *
  *  Prompt: Create a Linked List class/constructor.                               *
  *          Name it LinkedList (js) or Linked_List(rb/py).                        *
  *                                                                                *
  *          Part 1: Create a node class for your LinkedList.                      *
  *                  Your node class will take an integer value and output         *
  *                  and output and object with the following properties:          *
  *                                                                                *
  *                  node.value: input value                                       *
  *                  node.next: a pointer to the next value (initiall null)        * 
  *                                                                                *
  *                  Example: { value: 1, next: null }                             *
  *                                                                                *
  *          Part 2: Create the LinkedList class.                                  *
  *                  It should contain the following properties:                   *
  *                                                                                *
  *                  head: pointer to the head node                                *
  *                  tail: pointer to the tail node                                *
  *                  length: number of nodes in the linked list                    *
  *                                                                                *
  *                  The LinkedList should also contain the following properties   *
  *                                                                                *
  *                  append: function that adds a node to the tail                 *
  *                                                                                *
  *                  insert: function that takes in two values, one to be inserted *
  *                          and one to search.  It searches the list for the      *
  *                          search value, and if found, adds a new node with the  *
  *                          insert value before the node with the search value.   *
  *                                                                                *
  *                  delete: function that removes a node at a specified location, *
  *                          with a default action of deleting the head            *
  *                                                                                *
  *                  contains: function that checks to see if a value is contained *
  *                            in the list                                         *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A LinkedList instance                                                 *
  *                                                                                *
  *  What are the time and auxilliary space complexities of the various methods?   *
  *                                                                                *
  **********************************************************************************/
























// instantiation for listNode
var listNode = function(value){
  this.value = value;
  this.next = null;
}

// instantiation for linkedList
var linkedList = function(){
  this.head = null;
  this.tail = null;
  this.listLength = 0;
}

// append method for linkedList
linkedList.prototype.append = function(value){
  if (this.head === null){
    // initializing value being inserted into an empty linkedList
    this.head = new listNode(value);
    this.tail = this.head;
    this.listLength++;
  } else {
    // adding a value to a linkedList of one or more items
    this.tail.next = new listNode(value);
    this.tail = this.tail.next;
    this.listLength++;
  }
}

// insert method for linkedList
linkedList.prototype.insert = function(insertValue, searchValue){
  var work = this.head;
  while (work !== null){
    if (work.value === searchValue){
      var reference = work.next;
      work.next = new listNode(insertValue);
      work.next.next = reference;

      if (reference === null){
        // for when the searchValue is the tail value, we 
        // need to reassign the linkedList tail
        this.tail = work.next;
      }
      this.listLength++;
      return;
    }
    work = work.next;
  }
  console.log("second argument " + "'" + searchValue + "'" + " was not found in linkedList");
}

linkedList.prototype.delete = function(location){

  if (location === 0 && this.head !== null && this.head === this.tail){
    // case when linkedList consists of a single element
    var reference = this.head;
    this.head = null;
    this.tail = null;
    this.listLength--;
    return reference.value;
  } else if (location === 0 && this.head !== null && this.head.next !== null){
    // case when linkedList has more than one element, but 
    // zeroth element is being removed
    var reference = this.head;
    this.head = this.head.next;
    this.listLength--;
    return reference.value;
  }

  var work = this.head;
  var counter = 0;
  while (work !== null){
    if (counter === (location-1) && work.next !== null && work.next === this.tail){
      // case when removing the last element of linkedList
      var reference = work.next;
      work.next = work.next.next;
      this.tail = work;
      this.listLength--;
      return reference.value;
    } else if (counter === (location-1) && work.next !== null){
      // case when removing values that are not the head or tail
      var reference = work.next;
      work.next = work.next.next;
      this.listLength--;
      return reference.value;
    }
    counter++;
    work = work.next
  }
  console.log('Error: Index ' + "'" + location + "'" + ' falls out of the range of the length of the linkedList');
}

linkedList.prototype.contains = function(value){
  var work = this.head;
  while (work !== null){
    if (work.value === value){
      return true;
    }
    work = work.next;
  }
  return false;
}




// var test = new linkedList();

// test.append('hello');
// test.append('blah');
// test.append('great');

// console.log(JSON.stringify(test.head));
// console.log(test.delete(0));
// console.log(JSON.stringify(test.head));


/*********************************************************************** 
 *                       Pair Programming III                          *
 *                                                                     *
 *  Instructions: Solve the following problems in the preferred        *
 *                language of your group. Find the time and auxilliary *
 *                complexity of your solution.                         *
 *                                                                     *
 ***********************************************************************/

/**
 *  Problem 1: Queue w/ Linked List
 * 
 *  Prompt: Create a Queue class/constructor using a Linked List as your storage.
 *
 *          Your Queue class should contain the following properties:
 *            •Storage: A singly Linked List (you may use your HW solution or our provided solution)
 *            •Enqueue: Method that adds an item to the end of your queue
 *            •Dequeue: Method that removes and returns the first item of your queue
 *
 *          What are the time compexities of enqueue and dequeue?
 *
 *  Input: There is no input
 *  Output: A Queue instance
 *
 *  Example:  var queue = new Queue();
 *            queue.enqueue(1);
 *            queue.enqueue(3);
 *            queue.enqueue(3);
 *            queue.enqueue(7);
 *            queue.dequeue(); // 1
 *            queue.dequeue(); // 3
 **/


/**
 *  Problem 2: Stack w/ Linked List
 *
 *  Prompt: Create a Stack class/constructor using a Linked List as your storage.
 *
 *          Your Stack class should contain the following properties:
 *            •Storage: A singly Linked List (you may use your HW solution or our provided solution)
 *            •Push: Method that adds an item to the top of your stack
 *            •Pop: Method that removes and returns the top item of your stack
 *
 *          What are the time compexities of push and pop?
 *
 *  Input: There is no input
 *  Output: A Stack instance
 *
 *  Example:  var stack = new Stack();
 *            stack.push(1);
 *            stack.push(3);
 *            stack.push(3);
 *            stack.push(7);
 *            stack.pop(); // 7
 *            stack.pop(); // 3
 **/

/**
 *  Extra Credit: Doubly Linked List
 *
 *  Prompt: Refactor the LinkedList to be a DoublyLinkedList
 *
 *          Your Node should contain the following addtional property:
 *            •Previous: Pointer to the previous node
 *
 *          Your DoublyLinked should contain the following additional properties:
 *            •Prepend: Method that adds a node to the head
 *            •removeTail: Method that removes and return the tail from the DoublyLinkedList
 *
 *          What are the time compexities of prepend and removeTail?
 **/



var Queue = function(){
  this.storage = new linkedList();
}

Queue.prototype.enqueue = function(value){
  this.storage.append(value);
}

Queue.prototype.dequeue = function(){
  return this.storage.delete(0);
}










var Stack = function(){
  this.storage = new linkedList();
}

Stack.prototype.push = function(value){
  this.storage.append(value);
}

Stack.prototype.pop = function(){
  return this.storage.delete(this.storage.listLength-1);
}