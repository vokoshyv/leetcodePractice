/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  console.log(head);
  var last;
  if (head !== null && head.next !== undefined && head.next !== null){
    var toConnect = head.next;
    if (head.next.next === null){
      return head;
    }
  }
  var work = head;
  
  while (work !== null){
    if (work.next === null){
      last = work;
    }
    work = work.next;
  }

  if (head !== null && head.next !== undefined && head.next !== null){
    head.next = last;
    last.next = toConnect;
  }
  return head;
};