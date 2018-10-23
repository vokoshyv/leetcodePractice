/**
 * @param {number[][]} rooms
 * @return {boolean}
 */



class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.listLength = 0;
  }

  append(value) {
    if (this.head === null){
      this.head = new ListNode(value);
      this.tail = this.head;
      this.listLength++;
    } else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
      this.listLength++;
    }
  }

  delete (location) {
    if (location === 0 && this.head !== null && this.head === this.tail){
      var reference = this.head;
      this.head = null;
      this.tail = null;
      this.listLength--;
      return reference.value;
    } else if (location === 0 && this.head !== null && this.head.next !== null){
      var reference = this.head;
      this.head = this.head.next;
      this.listLength--;
      return reference.value;
    }

    var work = this.head;
    var counter = 0;
    while (work !== null){
      if (counter === (location-1) && work.next !== null && work.next === this.tail){
        var reference = work.next;
        work.next = work.next.next;
        this.tail = work;
        this.listLength--;
        return reference.value;
      } else if (counter === (location-1) && work.next !== null){
        var reference = work.next;
        work.next = work.next.next;
        this.listLength--;
        return reference.value;
      }
      counter++;
      work = work.next
    }
    console.log('Error: Index ' + "'" + location + "'" + ' falls out of the range of the length of the LinkedList');
  }

  size() {
    return this.listLength;
  }

}

class Queue {
  constructor() {
    this.storage = new LinkedList();
  }

  enqueue(value) {
    this.storage.append(value);
  }

  dequeue() {
    return this.storage.delete(0);
  }

  size() {
    return this.storage.size();
  }
}




var canVisitAllRooms = function(rooms) {
  let keys = new Set();

  let queue = new Queue();

  queue.enqueue(0);
  keys.add(0);
  let current;

  while (queue.storage.listLength > 0) {
    current = queue.dequeue();
    let newKeys = rooms[current];

    for (let newKey of newKeys) {
      if (!keys.has(newKey)) {
        queue.enqueue(newKey);
        keys.add(newKey);
      }
    }
  }

  return keys.size === rooms.length;

};
