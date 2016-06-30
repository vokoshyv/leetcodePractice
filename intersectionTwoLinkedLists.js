/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var prevA = headA;
  var prevB = headB;
  if (headA === null || headB === null){
    return null;
  }
  while (headA !== null){
    prevA = headA;
    headA = headA.next;
  }
  while (headB !== null){
    prevB = headB;
    headB = headB.next;
  }

  if (headA === headB){
    return true;
  } else {
    console.log('here');
    return null;
  }
};



