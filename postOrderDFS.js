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
var postorderTraversal = function(root) {
  if (root === null) {
    return [];
  }
  let result = [];
  let stack = [];
  stack.push(root);
  let visited = new Set();

  while (stack.length > 0) {
    let top = stack[stack.length - 1];
    if (!visited.has(top)) {
      if (top.right) {
        stack.push(top.right);
      }
      if (top.left) {
        stack.push(top.left);
      }
      visited.add(top);
    } else {
      top = stack.pop();
      result.push(top.val);
    }
  }



  return result;
};
