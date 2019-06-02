/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
  let modified = [];
  let chunk = '';

  let i = 0, j = 0;

  while (j < S.length) {
    chunk = S.slice(i, j);
    modified.push(formatNode(chunk));
    i = j;

    while (S[j] !== '-' || j >= S.length) {
      j++;
    }
    console.log(modified);
  }
  // chunk = S.slice(i, j);
  // modified.push(formatNode(chunk));

  console.log(modified);
};

function formatNode(str) {
  let depth = 0;
  let i = 0;
  while (i < str.length) {
    if (str[i] === '-') {
      depth++;
    } else {
      break;
    }
  }

  let value = parseInt(str.slice(i));

  return [value, depth];
}


recoverFromPreorder("1-2--3--4-5--6--7");
