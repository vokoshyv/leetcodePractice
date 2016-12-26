/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  var maxLength = 0;
  if (s.length % 2 === 0){
    for (var i = 0; i < s.length; i++){
      var j = i;
      var k = i - 1;
      while (k > -1 && s[j] === s[k]){
        maxLength = Math.max(maxLength, j - k + 1);
        j++;
        k--;
      }
    }
  } else {
    for (var i = 0; i < s.length; i++){
      var j = i;
      var k = i;
      while (k > -1 && s[j] === s[i]){
        maxLength = Math.max(maxLength, j - k + 1);
        j++;
        k--;
      }
    }
  } 
  return maxLength;
};