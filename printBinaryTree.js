/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */


// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// DO NOT EDIT
// generate tree from array
function deserialize(arr) {
  if (arr.length === 0) { return null; }
  let root = new TreeNode(arr[0]);
  let queue = [root];
  for(let i = 1; i < arr.length; i += 2) {
    let current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
      current.right = new TreeNode(arr[i + 1]);
      queue.push(current.right);
    }
  }
  return root;
}


const arr = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8];
const sampleTree = deserialize(arr);



console.log(printTree(sampleTree));

function printTree(root) {
  let maxDepth = 1;

  function traverse(current, depth) {
    if (current === null) {
      return;
    }

    maxDepth = Math.max(maxDepth, depth);
    traverse(current.left, depth + 1);
    traverse(current.right, depth + 1);
  }
  traverse(root, 1);

  let result = [];
  let width = 0;
  let i = 0;

  while (i < maxDepth) {
    width = 2 * width + 1;
    i++;
  }

  while (maxDepth--) {
    result.push(new Array(width).fill(" "));
  }

  // console.log("BEFORE: ");
  // console.log(result);

  function fillUp(current, depth, left, right) {
    if (current === null) {
      return;
    }

    let mid = (left + right) / 2;

    result[depth][mid] = current.val.toString();

    fillUp(current.left, depth + 1, left, mid - 1);
    fillUp(current.right, depth + 1, mid + 1, right);
  }
  fillUp(root, 0, 0, result[0].length - 1);

  // console.log("AFTER: ");
  // console.log(result);

  return result;
};
