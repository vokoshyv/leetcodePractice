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
    if (currentNode === null){
      if (currentSum === sum){
        result = true;
      }
      return;
    } else if (currentNode.right === null && currentNode.left === null){
      currentSum += currentNode.val;
      if (currentSum === sum){
        result = true;
      }
      currentSum -= currentNode.val;
      return;
    }

    search(currentSum + currentNode.val, currentNode.right);
    search(currentSum + currentNode.val, currentNode.left);

  }
  search(0, root);

  return result;
};