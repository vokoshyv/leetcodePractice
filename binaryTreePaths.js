/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var preResults = [];

  var findPaths = function(prevNode, buildUp){

    if (prevNode === null){
      return;
    } else if (prevNode.right === null && prevNode.left === null){
      buildUp.push(prevNode.val);
      preResults.push(buildUp.slice());
      buildUp.pop();
      return;
    }

    buildUp.push(prevNode.val);
    findPaths(prevNode.right, buildUp);
    findPaths(prevNode.left, buildUp);
    buildUp.pop();
  }
  findPaths(root, []);
  
  var results = [];
  for (var i = 0; i < preResults.length; i++){
    if (preResults[i].length > 0){
      results.push(preResults[i].join('->'));
    }
  }
  return results;
};