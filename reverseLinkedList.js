/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var current = head;
  var previous = null;
  var temp;

  while (current !== null){
    temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  return previous;
};


