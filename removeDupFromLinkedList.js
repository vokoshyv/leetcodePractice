/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
  if (head === null){
    return [];
  }

  var work = head;
  var reference = work.val;
  var result = [];
  result.push(work.val);

  work = work.next;
  while (work !== null){
    if (reference !== work.val){
      result.push(work.val);
      reference = work.val;
    }
    work = work.next;
  }
  return result;
};