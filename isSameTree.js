/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

  var result = true;

  var checkTree = function(tree1, tree2){

    if (tree1 === null && tree2 === null){
      return;
    } else if (tree1 === null && tree2 !== null){
      result = false;
      return;
    } else if (tree2 === null && tree1 !== null){
      result = false;
      return;
    } else if (tree1.val !== tree2.val){
      result = false;
      return;
    } else if (tree1.val === tree2.val){
      checkTree(tree1.right, tree2.right);
      checkTree(tree1.left, tree2.left);
    }
  }

  checkTree(p, q);

  return result;
};