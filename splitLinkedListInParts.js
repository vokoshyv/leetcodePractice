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
    let current = head;
    let listLength = 0;


    while (current !== null) {
        listLength++;
        current = current.next;
    }

    let modulo = listLength % k;
    current = head;
    let j = 0;

    while (modulo > 0) {
        let i = 0;
        result[j] = current;
        let ref;
        while (i < (k + 1) && current !== null) {
            i++;
            ref = current;
            current = current.next;
        }

        if (ref !== undefined) {
            ref.next = null;
        }
        j++;
        modulo--;
    }

    while (current !== null) {
        let i = 0;
        result[j] = current;
        let ref;
        while (i < k && current !== null) {
            i++;
            ref = current;
            current = current.next;
        }

        if (ref !== undefined) {
            ref.next = null;
        }
        j++;
    }

    return result;
};