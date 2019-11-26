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
var sumRootToLeaf = function(root) {
  let result = 0;
  let stack = [];
  stack.push([root, [root.val]]);

  let current, binary;

  while (stack.length > 0) {
    [current, binary] = stack.pop();

    if (current.left == null && current.right == null) {
      result += binaryToNum(binary);
    }
    if (current.left) {
      stack.push([current.left, binary.concat(current.left.val)]);
    }
    if (current.right) {
      stack.push([current.right, binary.concat(current.right.val)]);
    }
  }

  return result;
};

function binaryToNum(binary) {
  let i = binary.length;

  let total = 0;
  let base = 1;

  while (i--) {
    total += base * binary[i];
    base *= 2;
  }

  return total;
}


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
var sumRootToLeaf = function(root) {
  let result = 0;

  function traverse(current, binary) {
    if (current.left === null && current.right === null) {
      result += binaryToNum(binary);
      return;
    }

    if (current.left) {
      binary.push(current.left.val);
      traverse(current.left, binary);
      binary.pop();
    }
    if (current.right) {
      binary.push(current.right.val);
      traverse(current.right, binary);
      binary.pop();
    }
  }

  traverse(root, [root.val]);
  return result;
};
