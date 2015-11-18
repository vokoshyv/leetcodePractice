/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var right = '';
    var left = '';

    var rightFirst = function(current){
      if (current === null){
        right += 'null'
        return;
      }

      right += current.val;

      rightFirst(current.right);
      rightFirst(current.left);
    }

    var leftFirst = function(){
      if (current === null){
        left += 'null'
        return;
      }

      left += current.val;

      leftFirst(current.left);
      leftFirst(current.right);
    }

    return (right === left);
};