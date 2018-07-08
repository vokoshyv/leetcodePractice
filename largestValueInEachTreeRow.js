/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {

  if (root === null) {
    return [];
  }
  
  let result = [];
  let stack = [];
  let current;
  let depth;

  stack.push([root, 0]);

  while (stack.length > 0) {
    [current, depth] = stack.pop();
    result[depth] = result[depth] ? Math.max(result[depth], current.val) : current.val;

    if (current.left !== null) {
      stack.push([current.left, depth + 1]);
    }
    if (current.right !== null) {
      stack.push([current.right, depth + 1]);
    }
  }

  return result;
};
