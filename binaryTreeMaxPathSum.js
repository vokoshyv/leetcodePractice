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
var maxPathSum = function(root) {
  var result = -9999999999;

  function traverse(current){
    if (current === null){
      return 0;
    }

    var choiceLeft = traverse(current.left) + current.val;
    var choiceRight = traverse(current.right) + current.val;
    result = Math.max(result, choiceLeft + choiceRight - current.val);
    return Math.max(choiceLeft, choiceRight);
  }
  traverse(root);

  return result;
};



