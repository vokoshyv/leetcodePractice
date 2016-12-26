/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  var count = 0;
  var lib = {};
  s.split('').forEach(function(letter){
    if (lib[letter] === undefined){
      lib[letter] = true;
    } else {
      delete lib[letter];
      count += 2;
    }
  });
  var oddMax = 0;
  for (var key in lib){
    oddMax = Math.max(oddMax, lib[key]);
  }
  return count + oddMax;
};