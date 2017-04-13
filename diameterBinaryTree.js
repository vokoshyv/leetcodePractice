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
var diameterOfBinaryTree = function(root) {
  var maxSum = 0;
  function traverse(current){
    if (current === null){
      return -1;
    }

    var left = traverse(current.left) + 1;
    var right = traverse(current.right) + 1;
    maxSum = Math.max(maxSum, left + right);
    return Math.max(left, right);
  }
  traverse(root);
  return maxSum;
};



