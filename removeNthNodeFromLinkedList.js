/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var headReference = head;
  var counter = 0;
  if (n = 0){
    return head.next;
  }
  
  var result = [];

  while (head !== null){
    if (counter = n){
      head.next = head.next.next;
    }
    head = head.next;
    counter++;
  }

  return headReference;
};