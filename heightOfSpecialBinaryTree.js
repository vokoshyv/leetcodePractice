/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const isLeafNode = (node) => {
    if (node.left && node.left.right && node.left.right.val === node.val) {
        return true;
    }
    if (node.right && node.right.left && node.right.left.val === node.val) {
        return true;
    }
    return false;
}

var heightOfTree = function (root) {
    const arr = [];

    arr.push([root, 0]);
    let curr, currDepth;
    let result = 0;

    while (arr.length > 0) {
        [curr, currDepth] = arr.pop();

        if (isLeafNode(curr)) {
            result = Math.max(result, currDepth);
        } else {
            if (curr.left) {
                arr.push([curr.left, currDepth + 1]);
            }
            if (curr.right) {
                arr.push([curr.right, currDepth + 1]);
            }
        }
    }

    return result;
};