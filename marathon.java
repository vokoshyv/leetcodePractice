https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

				1
		2				3
	4		5		6		7

[[1] , [2,3], [4, 5, 6, 7]]



separate binary tree by levels


[{1, 0}, {2, 1}, {3, 1}, {4,2}, {5, 2}, {6, 2}, {7, 2}]


// package whatever; // don't place package name!

import java.io.*;
import java.util.*;

class MyCode {
	public static void main (String[] args) {

    Marathon marathon = new Marathon();

    marathon.alert(0, 0);
    marathon.alert(0, 1);
    marathon.alert(0, 2);
    marathon.print(); // p0 p1 p2
    System.out.println();

    marathon.alert(1, 1);
    marathon.print(); // p1 p0 p2
    System.out.println();

    marathon.alert(2, 1);
    marathon.print(); // p1 p0 p2
    System.out.println();

    marathon.alert(1, 2);
    marathon.print(); // p1 p2 p0
    System.out.println();

    // marathon.alert(0, 1);
    // marathon.alert(0, 2);
    // marathon.alert(0, 3);

    // marathon.print();

    // System.out.println("Hello");
	}
}




class Node {
  public Integer value;
  public Node next = null;
  public Node previous = null;

  public Node(Integer value) {
    this.value = value;
  }
}

class LinkedHashMap {
  public Node head = new Node(-1);
  public Node tail = new Node(-1);

  public HashMap<Integer, Node> library = new HashMap<Integer, Node>();

  public LinkedHashMap() {
    this.head.next = this.tail;
    this.tail.previous = this.head;
  }

  public Node get(Integer playerID) {
    return this.library.get(playerID);
  }

  public Node remove(Integer key) {
    Node ref = this.library.get(key);

    Node prevNode = ref.previous;
    Node nextNode = ref.next;

    ref.next = null;
    ref.previous = null;

    prevNode.next = nextNode;
    nextNode.previous = prevNode;

    return ref;
  }

  public void addToTail(Integer current) {
    Node newNode = new Node(current);
    Node prev = this.tail.previous;

    prev.next = newNode;
    newNode.previous = prev;
    newNode.next = this.tail;
    this.tail.previous = newNode;


    // add to the hashmap
    this.library.put(current, newNode);
  }

  public void iterate() {
    Node current = this.head.next;

    while (current != this.tail) {
      System.out.println(current.value);
      current = current.next;
    }
  }

  // public Node removeFromHead() {
  //   Node result = this.head.next;
  //   Node nextNode = result.next;

  //   nextNode.previous = this.head;
  //   this.head.next = nextNode;
  //   result.next = null;
  //   result.previous = null;

  //   // remove from the hashmap
  //   this.library.remove(result.value);

  //   return result;
  // }


}



class Marathon {
  public HashMap<Integer, LinkedHashMap> storage = new HashMap<Integer, LinkedHashMap>();

  public void alert(Integer checkpoint, Integer playerID) {

    if (checkpoint > 0) {
      LinkedHashMap priorCheckpoint = this.storage.get(checkpoint - 1);
      priorCheckpoint.remove(playerID);
    }

    if (!this.storage.containsKey(checkpoint)) {
      this.storage.put(checkpoint, new LinkedHashMap());
    }
    this.storage.get(checkpoint).addToTail(playerID);

  }

  public void print() {

    int index = this.storage.size() - 1;

    while (index > -1) {
      this.storage.get(index).iterate();
      index -= 1;
    }
  }
}

/*
"Implement a Marathon Supervisor app with 2 methods alert and print.

There are multiple checkpoints and players in this Marathon.
Every time a player reaches a checkpoint alert() method is called.
The print() method can be called anytime to print the current marathon
status about which players ranks where in the race."

 Example:
 alert(c0, p0)
 alert(c0, p1)
 alert(c0, p2)
 print(): p0 p1 p2

 alert(c1, p1)
 print(): p1 p0 p2

 alert(c2, p1)
 print(): p1 p0 p2

 ==================================
 Only 1 check point:
 queue

      3  2  1
 ->  p2 p1 p0 ->

  Only 2 check points:

      3  2  1
 ->  p2 p1 p0 ->
     c0 c0 c0

      3  2  1
 ->  p2 p1 p0 ->
     c0 c0 c0

 p1
 c1
==================================
 Stack
      c1, p1
      c0, p2
      c0, p1 --
      c0, p0

==================================
Map<Integer,Queue<Integer>>
c0 - p0 p1 p2

c0 - p0 p2
c1 - p1

c0 - p0 p2
c1 -
c2 - p1

c2 - last I was at c1 : so remove from last check point

Map<Integer,LinkedList<Integer>>

c0 - p0, p2
c1 -
c2 - p1


c0 - p0, p1, p2
c1 -
c2 -


c0 - p0, p2
c1 - p1
c2 -



==================================

==================================

alert():
Time O(p)

print():
Time O(c+p)

*/


// class Main {
//   public static void main(String[] args) {
//     System.out.println("Hello world!");
//   }
// }

// import java.util.*;


/*


{

          ________________________________________________________
c1:          <-   <-{1}-> <-{3}->   <-
          ________________________________________________________


          ________________________________________________________
c2:          <-  <-{2}->    <-
          ________________________________________________________


}



map = {
  Integer: LLNode instance

  1: {1}
  2: {2}
  3: {3}
}


alert(2, 2)

HashMap<Integer, LinkedHashMap<key, value>>

*/

// class Main {
//   private static HashMap<Integer, LLNode> runners = new HashMap<Integer, LLNode>();
//   // private static LinkedList<LLNode> storage = new LinkedList<LLNode>();
//   private static HashMap<Integer, LinkedList<LLNode>> storage = new HashMap<Intehger, LinkedList<LLNode>>();

//   alert(int checkpoint, int runnerID) {
//     // find corresponding checkpoint inside storage
//     // create Linked List (if checkpoint does not exist)
//     //
//     // removal
//     // use runners hashmap to find associated LLNode
//     // delete LLNode from old checkpoint LL
//     //
//     // create new LLNode with runnerID
//     // add runnerID LLNode to new checkpoint LinkedList

//   }



// }




// class Solution {

//     static Map<Integer,LinkedList<Integer>> marathonTracker = new HashMap<>();

//     // Time Complexity = O(p) where p is number of players
//     public static void alert(Integer checkpointId, Integer playerId) {

//         LinkedList<Integer> playersAtCurrentCheckpoint;

//         if (marathonTracker.containsKey(checkpointId)) {
//             playersAtCurrentCheckpoint = marathonTracker.get(checkpointId);
//         } else {
//             playersAtCurrentCheckpoint = new LinkedList();
//         }

//         playersAtCurrentCheckpoint.add(playerId);
//         marathonTracker.put(checkpointId, playersAtCurrentCheckpoint);

//         if (checkpointId != 0) {
//             List<Integer> playersAtPrevCheckpoint;
//             playersAtPrevCheckpoint = marathonTracker.get(checkpointId - 1);
//             playersAtPrevCheckpoint.remove(playerId);
//         }
//     }

//     // Time Complexity = O(c + p) where p is number of players and c is number of checkpoints
//     private static void print() {
//         System.out.println("\nPlayers Ranking:");
//         for (int i = marathonTracker.size() - 1; i >= 0; i--) {
//             for (int j = 0; j < marathonTracker.get(i).size(); j++) {
//                 System.out.print("p" + marathonTracker.get(i).get(j) + " ");
//             }
//         }
//     }

//     public static void main(String[] args) {
//         alert(0, 0);
//         alert(0, 1);
//         alert(0, 2);
//         print(); // p0 p1 p2

//         alert(1, 1);
//         print(); // p1 p0 p2

//         alert(2, 1);
//         print(); // p1 p0 p2

//         alert(1, 2);
//         print(); // p1 p2 p0
//     }
// }
