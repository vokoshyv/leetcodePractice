/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var result = [];
  var queue = [];

  if (root === null){
    return result;
  }

  queue.push([0, root]);
  var current;
  var i = 0;

  while (i < queue.length){
    current = queue[i];

    if (current[1].left){
      queue.push([current[0] + 1, current[1].left]);
    }
    if (current[1].right){
      queue.push([current[0] + 1, current[1].right]);
    }

    if (result[current[0]] !== undefined){
      result[current[0]].push(current[1].val);
    } else {
      result[current[0]] = [current[1].val];
    }
    i++;
  }

  return result.reverse();
};