/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var ultimateMax = 0;
  var currentMax = 0;
  var work = {};
  for (var i = 0; i < s.length; i++){
    if (work[s[i]] !== undefined){
      ultimateMax = Math.max(ultimateMax, currentMax);
      currentMax = i - work[s[i]] + 1;
    }else {
      work[s[i]] = i;
      currentMax++;
    }
  }
  ultimateMax = Math.max(ultimateMax, currentMax);
  
  console.log(ultimateMax);
  return (ultimateMax !== 0)? ultimateMax : currentMax;
};