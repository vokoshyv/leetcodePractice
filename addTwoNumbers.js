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

var getOnes = function(number){
  var work = number.toString();
  return Number(work[work.length-1]);
}

var ListNode = function(val){
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  var work = l1
  var l1Counter = 0;
  var l2Counter = 0;
  
  while (l1 !== null){
    l1Counter++;
    l1 = l1.next;
  }
  while (l2 !== null){
    l2Counter++;
    l2 = l2.next;
  }

  if (l1Counter > l2Counter){
    var current = l1;
    var start = l1;
  }else{
    var current = l2;
    var start = l2;
  }

  var carry = 0;
  
  while (l1.next !== null && l2.next !== null){

    work.val = getOnes(l1.val + l2.val + carry);
    if ((l1.val + l2.val + carry) > 9){
      carry = 1;
    }else {
      carry = 0;
    }

    if (l1){
      l1 = l1.next;
    }
    if (l2){
      l2 = l2.next;
    }
    work.next = new ListNode();
    work = work.next
  }
  console.log(origin);
};