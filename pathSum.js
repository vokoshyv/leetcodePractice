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

  if (root === null){
    return false;
  }

  var result = false;

  var search = function(currentSum, currentNode){
    if (currentNode !== null && currentNode.right === null && currentNode.left === null){
      currentSum += currentNode.val;
      if (currentSum === sum){
        result = true;
      }
      currentSum -= currentNode.val;
      return;
    }

    if (currentNode !== null){
      search(currentSum + currentNode.val, currentNode.right);
      search(currentSum + currentNode.val, currentNode.left);
    }

  }
  search(0, root);

  return result;
};