/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

  var pPath = [];
  var qPath = [];

  var traverse = function(work, build, target){
    while (work !== null){
      build.push(work.val);
      if (target.val < work.val){
        work = work.left;
      } else if (target.val > work.val){
        work = work.right;
      } else if (target.val === work.val){
        break;
      }
    }
  }

  traverse(root, pPath, p);
  traverse(root, qPath, q);

  var longer = Math.max(pPath.length, qPath.length);

  for (var i = 0; i < longer; i++){
    console.log(i);
    if (pPath[i] === undefined){
      return qPath[i-1];
    } else if (qPath[i] === undefined){
      return pPath[i-1];
    } else if (qPath[i] !== pPath[i]){
      return pPath[i-1];
    }
  }
};