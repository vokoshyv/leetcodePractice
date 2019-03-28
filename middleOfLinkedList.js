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
var middleNode = function(head) {
  let hare = head;
  let turtle = head;

  let turtleMobile = false;

  while (hare !== null) {
    hare = hare.next;
    if (turtleMobile) {
      turtle = turtle.next;
      turtleMobile = false;
    } else {
      turtleMobile = true;
    }
  }

  return turtle;
};
