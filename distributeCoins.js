/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {

};


/*
              0
          /     \
         4       0
        / \       \
       1   0       2
      /
     0
      \
       1
        \
         0

output should be 9


What comes back:

- How much surplus of coins
- How much empty spots there are

- Another idea:

Get the distance of every node from every other node.
Group them by the shortest connections
Start with the shortest connections that involve an empty location and surplus


- If I encounter a zero, I know that it needs at least one movement to
  get a coin to here
- If I encounter a surplus of coins, it will take at least one movement to
  remove the coin from this position

New idea:

- Move all the coins to the top => check how many steps that would take
- Then check how much it would take to distribute all the coins to each position



          0
        /   \
       0    0
      /      \
     5        0


10 moves

1 + 2 + 2 + 3

3 * 5


Idea:

Find distance between each node and every other node

At any given node, find how many coins are to the left and right
At any given node, find how many blanks are to left and right

At myself, I either have coins, or I have 1, or I have none

4 coins excess
3 coins excess






*/
