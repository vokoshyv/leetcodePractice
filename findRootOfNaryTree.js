/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {_Node[]} tree
 * @return {_Node}
 */
var findRoot = function(tree) {
    const encountered = new Map();
    for (let node of tree) {
        encountered.set(node, false);
    }

    for (let node of tree) {
        let children = node.children;
        for (let child of children) {
            encountered.set(child, true);
        }
    }

    let result;
    encountered.forEach((value, key) => {
        if (!value) {
            result = key;
        }
    })

    return result;
};