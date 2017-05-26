/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  var stack = [];
  stack.push(root);
  var result = [];
  var current;

  while (stack.length > 0){
    current = stack.pop();
    
    while (current.left !== null){
      stack.push(current);
      current = current.left
    }

    result.push(current.value);

    if (current.right !== null){
      stack.push(current.right);
    }
  }

  return result;
};