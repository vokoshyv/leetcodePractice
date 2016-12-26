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
 * @return {number}
 */
var kthSmallest = function(root, k) {
  var results = [];
  function traverse(cNode){
    if (cNode === null){
      return;
    } else if (results.length > k){
      return;
    }

    traverse(cNode.left);
    results.push(cNode.val);
    traverse(cNode.right);
  }
  traverse(root);
  return results[k - 1];
};