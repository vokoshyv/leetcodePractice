/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    let stack = [];
    if (root === null) {
        return result;
    }
    stack.push([root, 0]);
    let current;
    let depth;

    while (stack.length > 0) {
        [current, depth] = stack.pop();
        if (result[depth] === undefined) {
            // result.push([]);
            result[depth] = [];
        }

        result[depth].push(current.val);

        if (current.right !== null) {
            stack.push([current.right, depth + 1]);
        }
        if (current.left !== null) {
            stack.push([current.left, depth + 1]);
        }
    }

    return result;
};
