/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var flipBinaryTree = function(root, leaf) {
    let path;
    let directions;

    const reroute = (currentPath, currentDirections, current) => {
        if (current === null) {
            return;
        }
        if (current === leaf) {
            path = currentPath.slice();
            directions = currentDirections.slice();
            return;
        }

        currentPath.push(current.left);
        currentDirections.push('left');
        reroute(currentPath, currentDirections, current.left);
        currentPath.pop();
        currentDirections.pop();

        currentPath.push(current.right);
        currentDirections.push('right');
        reroute(currentPath, currentDirections, current.right);
        currentPath.pop();
        currentDirections.pop();
    }

    reroute([root], [], root);

    for (let i = path.length - 1; i > 0; i--) {
        let current = path[i];
        let parent = path[i - 1];
        let direction = directions[i - 1];

        if (current.left !== null) {
            current.right = current.left;
            current.left = null;
        }

        current.left = parent;
        parent[direction] = null;
        parent.parent = current;
    }

    leaf.parent = null;

    return leaf;
};


