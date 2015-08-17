/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var occurred = {};
  var maxLength = 0;
  var currLength = 0;
  var checkFrom = 0;
  for (var i = 0; i < s.length; i++){
    if (occurred[s[i]] !== undefined && occurred[s[i]] >= checkFrom){
      maxLength = Math.max(maxLength, currLength);
      currLength = i - occurred[s[i]];
      checkFrom = occurred[s[i]];
      occurred[s[i]] = i;
    } else {
      currLength++;
      occurred[s[i]] = i;
    }
  }
  maxLength = Math.max(currLength, maxLength);
  return maxLength;
};