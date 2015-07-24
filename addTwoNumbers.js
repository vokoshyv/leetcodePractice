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

var addTwoNumbers = function(l1, l2) {
  var l1String = '';
  var l2String = '';

  while (l1 !== null){
    l1String = l1.val.toString() + l1String;
    l1 = l1.next;
  }
  while (l2 !== null){
    l2String = l2.val.toString() + l2String;
    l2 = l2.next;
  }

  var preWork = (Number(l1String) + Number(l2String)).toString();

  var result = [];

  var i = preWork.length;

  while (i--){
    result.push(Number(preWork[i]));
  }

  return result;
};