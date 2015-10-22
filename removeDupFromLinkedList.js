function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// var linkedList = function(){
//   this.head = null;
//   this.tail = null;
//   this.size = 0;
// }

// linkedList.prototype.append = function(value){
//   if (this.size === 0){
//     this.head = new ListNode(value);
//     this.tail = this.head;
//     this.size++;
//   } else {
//     this.tail.next = new ListNode(value);
//     this.tail = this.tail.next;
//     this.size++;
//   }
// }

var deleteDuplicates = function(head) {
  if (head === null){
    return [];
  }

  var work = head;
  // var storage = new linkedList();
  var reference = work;
  var result = [];
  result.push(work.val);
  // storage.append(work.val);

  work = work.next;
  while (work !== null){
    if (reference.val !== work.val){
      result.push(work.val);
      reference = work;
    }
    work = work.next;
  }
  return result;
};