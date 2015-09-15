/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  var result = false;

  if (root === null){
    return false;
  }

  var search = function(currentSum, currentNode){
    if (currentSum === sum && currentNode === null){
      result = true;
      return;
    } else if (currentNode === null){
      return;
    } else if (currentSum === sum && currentNode.right === null && currentNode.left === null){
      result = true;
      return;
    }

    search(currentSum + currentNode.val, currentNode.right);
    search(currentSum + currentNode.val, currentNode.left);
  }
  search(0, root);

  return result;
};