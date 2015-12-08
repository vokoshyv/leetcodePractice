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

  var traverseP = function(work){
    if (work === null){
      return;
    } else {
      pPath.push(work.val);
      if (p.val > work.val){
        traverseP(work.right);
      } else if (p.val < work.val){
        traverseP(work.left);
      }
    }
  }

  var traverseQ = function(work){
    if (work === null){
      return;
    } else {
      qPath.push(work.val);
      if (q.val > work.val){
        traverseQ(work.right);
      } else if (q.val < work.val){
        traverseQ(work.left);
      }
    }
  }

  traverseP(root);
  traverseQ(root);

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