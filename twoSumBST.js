/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let work = new Set();

  let stack = [];
  stack.push(root);
  let current;
  while (stack.length > 0){
    current = stack.pop();

    if (current.left !== null){
      stack.push(current.left);
    }
    if (current.right !== null){
      stack.push(current.right);
    }

    if (work.has(k - current.val)){
      return true;
    }

    work.add(current.val)
  }
  return false;
};
