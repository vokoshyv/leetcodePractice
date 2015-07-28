/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var result = [];
  while (l1 !== null || l2 !== null){
    if (l1 === null){
      result.push(l2.val);
      l2 = l2.next;
    }else if (l2 === null){
      result.push(l1.val);
      l1 = l1.next;
    }else if (l1.val < l2.val){
      result.push(l1.val);
      l1 = l1.next;
    }else if (l2.val < l1.val){
      result.push(l2.val);
      l2 = l2.next;
    }else {
      result.push(l1.val);
      l1 = l1.next;
    }
  }
  return result;
};