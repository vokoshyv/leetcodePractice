/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    const result = new Array(k).fill(null);
    const lastNodes = new Array(k).fill(null);

    let current = head;
    let i = 0;

    while (current !== null) {
        let arrayI = i % k;

        if (result[arrayI] !== null) {
            let lastNode = lastNodes[arrayI];
            lastNode.next = current;
            lastNodes[arrayI] = current;
        } else {
            result[arrayI] = current;
            lastNodes[arrayI] = current;
        }

        i++;
        let ref = current;
        current = current.next;
        ref.next = null;
    }

    return result;
};