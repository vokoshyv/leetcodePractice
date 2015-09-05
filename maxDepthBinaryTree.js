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

var maxDepth = function(root) {
	var result = 1;

	var searchDeep = function(node, depth){


		searchDeep(node.right, depth + 1);
		searchDeep(node.left, depth + 1);
	}
	searchDeep(root, 1);
	return result;
};