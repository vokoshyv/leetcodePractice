/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  var occurred = {};
  var maxLength = 0;
  var currLength = 0;

  for (var i = 0; i < s.length; i++){
    if (occurred[s[i]] !== undefined){
      maxLength = Math.max(maxLength, currLength);
      currLength = i - occurred[s[i]]-1;
      var temp = i;
      i = occurred[s[i]] + 1;
      occurred = {};
      occurred[s[i]] = temp;
    }else {
      currLength++;
      occurred[s[i]] = i;
      maxLength = Math.max(maxLength, currLength);
    }
  }
  return maxLength;
};