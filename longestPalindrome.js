/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var result = '';

  function check(start, end){
    while (start > -1 && end < s.length && s[start] === s[end]){
      if (end - start + 1 > result.length){
        result = s.slice(start, end + 1);
      }
      start--;
      end++;
    }
  }

  for (var i = 0; i < s.length; i++){
    check(i, i);
    check(i, i+1);
  }

  return result;
};

console.log(longestPalindrome('cbbd'));