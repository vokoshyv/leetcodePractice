/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  var toReturn = head;
  var current = head;
  var previous = null;
  var temp;

  while (m--){
    previous = current;
    current = current.next;
  }

  while (n--){
    temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  return toReturn;
};

