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
var preorderTraversal = function(root) {
  var stack = [];
  var results = [];

  if (root === null){
    return [];
  }

  stack.push(root);
  var currentNode;
  
  while (stack.length > 0){
    currentNode = stack.pop();
    if (currentNode.right !== null){
      stack.push(currentNode.right);
    }
    if (currentNode.left !== null){
      stack.push(currentNode.left);
    }
    results.push(currentNode.val);
  } 
  return results;
};