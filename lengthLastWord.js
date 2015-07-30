/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.split(' ');
  var work = 0;
  for (var i = 0; i < s.length; i++){
    if (s[i].length > 0){
      work = s[i].length; 
    }
  }
  return work;
};