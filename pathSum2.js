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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let result = [];

  function traverse(current, path, currentSum) {
    if (current === null) {
      return;
    }
    if ((currentSum + current.val) === sum && current.left === null && current.right === null) {
      path.push(current.val);
      result.push(path.slice());
      path.pop();
      return;
    }

    path.push(current.val);
    currentSum += current.val;

    traverse(current.left, path, currentSum);
    traverse(current.right, path, currentSum);

    path.pop();
    currentSum -= current.val;
  }

  traverse(root, [], 0);
  return result;
};
