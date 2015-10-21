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
  } else if (this.head === this.tail){
    // adding a value to a linkedList that has only one item
    this.head.next = new listNode(value);
    this.tail = this.head.next;
    this.listLength++;
  } else {
    // adding a value to a linkedLIst of two or more items
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
  var work = this.head;
  var counter = 0;

  if (location === 0 && this.head !== null && this.head === this.tail){
    // case when linkedList consists of a single element
    this.head = null;
    this.tail = null;
    this.listLength--;
  } else if (location === 0 && this.head !== null && this.head.next !== null){
    // case when linkedList has more than one element, but 
    // zeroth element is being removed
    this.head = this.head.next;
    this.listLength--;
  }
  while (work !== null){

    console.log("CHECK1: ", work.next);
    console.log("CHECK2: ", this.tail);
    if (counter === (location-1) && work.next !== null && work.next === this.tail){
      work.next = work.next.next;
      this.tail = work;
      this.listLength--;
      return;
    } else if (counter === (location-1) && work.next !== null){
      work.next = work.next.next;
      this.listLength--;
      return;
    }
    counter++;
    work = work.next
  }
}

linkedList.prototype.contains = function(){
  
}


var test = new linkedList();

test.append('hello');
test.append('bye');
test.append('toodle');
// test.append('great');

test.delete(2);


console.log(JSON.stringify(test.head));
console.log(test.tail);
console.log(test.listLength);