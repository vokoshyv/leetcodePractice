/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var work = head;
  if (work === null){
    return work;
  }
  while (work !== null && work.val === val){
    work = work.next;
  }

  var head = work;

  while (work !== null){
    while (work.next !== null && work.next.val === val){
      work.next = work.next.next;
    }
    work = work.next;
  }
  return head;
};