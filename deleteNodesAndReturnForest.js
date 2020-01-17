/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  let stack = [];
  if (root === null) {
    return [];
  }

  to_delete = new Set(to_delete);
  let result = [];
  let parent, current, branch;

  stack.push([null, root, null]);

  while (stack.length > 0) {
    [parent, current, branch] = stack.pop();

    if (parent === null) {
      if (!to_delete.has(current.val)) {
        result.push(current);
      }
    } else {
      if (to_delete.has(current.val)) {
        parent[branch] = null;
      } else if (to_delete.has(parent.val)) {
        result.push(current);
      }
    }

    if (current.left) {
      stack.push([current, current.left, "left"]);
    }
    if (current.right) {
      stack.push([current, current.right, "right"]);
    }
  }



  return result;
};
