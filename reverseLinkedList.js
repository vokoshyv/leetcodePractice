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
  var buildUp = null;
  var ref;

  var goOutAndReturn = function(cNode){
    if (cNode === null){
      return;
    }

    goOutAndReturn(cNode.next);
    
  }
};