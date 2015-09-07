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
var invertTree = function(root) {

  var performInversion = function(current){
    if (current === null){
      return;
    }

    var temp = current.right;
    current.right = current.left;
    current.left = temp;

    performInversion(current.right);
    performInversion(current.left);

  }

  performInversion(root);
  return root;
};