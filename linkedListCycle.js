/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    console.log(head);
    var counter = 0;
    while (head !== null){
        if (head === null){
            return false;
        }
        head = head.next;
        counter++;
        if (counter > 1000000){
            return true;
        }
    }
    return false;
};