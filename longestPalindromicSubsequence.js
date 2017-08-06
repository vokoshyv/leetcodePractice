/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  function check(left, right){
    if (left === right){
      return 1;
    } else if (left === right - 1 && s[left] === s[right]){
      return 2;
    } else if (s[left] === s[right]){
      return 2 + check(left + 1, right - 1);
    } else {
      return Math.max(check(left + 1, right), check(left, right - 1));
    }
  }
  return check(0, s.length - 1);
};
