/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  let result = [];
  for (let i = 0; i < s.length; i++){
    result.push([]);
    result[i][i] = 1;
  }

  let diag = 1;

  while (diag < s.length){
    let y = 0;
    for (let x = diag; x < s.length; x++){
      if (y === x - 1 && s[x] == s[y]){
        result[y][x] = 2;
      } else if (y === x - 1){
        result[y][x] = 1;
      } else if (s[y] === s[x]){
        result[y][x] = 2 + result[y + 1][x - 1];
      } else {
        result[y][x] = Math.max(result[y+1][x], result[y][x-1]);
      }
      y++;
    }
    diag++;
  }
  return result[0][s.length - 1];

};

// console.log(longestPalindromeSubseq('bbbab'));

// var longestPalindromeSubseq = function(s) {
//   function check(left, right){
//     if (left === right){
//       return 1;
//     } else if (left === right - 1 && s[left] === s[right]){
//       return 2;
//     } else if (s[left] === s[right]){
//       return 2 + check(left + 1, right - 1);
//     } else {
//       return Math.max(check(left + 1, right), check(left, right - 1));
//     }
//   }
//   return check(0, s.length - 1);
// };
