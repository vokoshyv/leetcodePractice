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
    return null;
  }
  if (head.next = null){
    return head;
  }

  var temp = head;
  var futureNext;

  futureNext = head.next;
console.log(head);
console.log(futureNext === null);

  while (futureNext !== null){
    temp = futureNext;
    temp.next = head;
    console.log('indoor: ', futureNext);
    futureNext = futureNext.next;
    head = temp;
  }
  console.log("TEMP: ", temp);
  console.log("FUTURENEXT: ", futureNext);
  console.log("HEAD: ", head);
  return temp;
};

