/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
  let maxDepth = 1;

  function traverse(current, depth) {
    if (current === null) {
      return;
    }

    maxDepth = Math.max(maxDepth, depth);
    traverse(current.left, depth + 1);
    traverse(current.right, depth + 1);
  }
  traverse(root, 1);

  let result = [];
  let width = 0;
  let i = 0;

  while (i < maxDepth) {
    width = 2 * width + 1;
    i++;
  }

  while (maxDepth--) {
    result.push(new Array(width).fill(""));
  }

  function fillUp(current, depth, left, right) {
    if (current === null) {
      return;
    }

    let mid = (left + right) / 2;

    result[depth][mid] = current.val.toString();

    fillUp(current.left, depth + 1, left, mid - 1);
    fillUp(current.right, depth + 1, mid + 1, right);
  }
  fillUp(root, 0, 0, result[0].length - 1);
  return result;
};
