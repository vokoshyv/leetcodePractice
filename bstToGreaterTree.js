/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  var largerNums = 0;
  function traverse(current){
    if (current === null){
      return;
    }

    traverse(current.right);
    largerNums += current.val;
    current.val = current.val + largerNums - current.val;
    traverse(current.left);
  }
  traverse(root);
  return root
};