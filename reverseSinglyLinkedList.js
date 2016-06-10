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
  if (head === null){
    return head;
  } else if (head.next === null){
    return head;
  }

  var temp = reverseList(head.next);
  head.next = null;
  temp.next = head;
  return temp;
};




// 1 --> 5 --> 10 --> 15


// 1 --> null

// 1 --> 5 --> null











