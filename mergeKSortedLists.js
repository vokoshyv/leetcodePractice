/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeTwoSortedLists = function(list1, list2){

  var work;

  if (list1 === null){
    return list2;
  } else if (list2 === null){
    return list1;
  }

  if (list1.val < list2.val){
    work = list1;
    list1 = list1.next;
  } else {
    work = list2;
    list2 = list2.next;
  }

  var root = work;


  while (list1 !== null || list2 !== null){
    if (list1 === null){
      work.next = list2;
      break;
    } else if (list2 === null){
      work.next = list1;
      break;
    }

    if (list1.val < list2.val){
      work.next = list1;
      list1 = list1.next;
      work = work.next;
    } else {
      work.next = list2;
      list2 = list2.next;
      work = work.next;
    }
  }
  
  return root;
} 



var mergeKLists = function(lists) {
  if (lists[0] === undefined){
    return [];
  }
  var result = lists[0];

  for (var i = 1; i < lists.length; i++){
    result = mergeTwoSortedLists(result, lists[i]);
  }
  return result;
};