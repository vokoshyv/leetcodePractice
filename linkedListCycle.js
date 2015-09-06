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
    // 1) METHOD ONE
    // console.log(head);
    // var counter = 0;
    // while (head !== null){
    //     if (head === null){
    //         return false;
    //     }
    //     head = head.next;
    //     counter++;
    //     if (counter > 8030){
    //         return true;
    //     }
    // }
    // return false;

    // 2) METHOD TWO
    // var turtle = head;
    // if (head !== null && head.next !== undefined){
    // 	var hare = head.next;
    // } else {
    // 	return false;
    // }
    // var check = true;

    // while (turtle !== null && hare !== null){
    // 	if (turtle === hare){
    // 		return true;
    // 	}
    // 	if (check){
    // 		turtle = turtle.next;
    // 		hare = hare.next;
    // 		check = false;
    // 	} else {
    // 		hare = hare.next;
    // 		check = true;
    // 	}
    // }

    // return false;

    // 3) METHOD 3
	
	if (head === null){
		return false;
	} else if (head.next === null){
		return false;
	}

	var start = head;

	while (head !== null){
		head = head.next;
		if (head = start){
			return true;
		}
	}
	return false;
};




















