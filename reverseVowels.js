/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var left = 0;
  var right = s.length-1;

  s = s.split('');
  var lib = {
    a: true,
    e: true, 
    i: true, 
    o: true, 
    u: true, 
    A: true,
    E: true, 
    I: true, 
    O: true, 
    U: true
  }
  var temp;

  while (left < right){
    if (lib[s[left]] && lib[s[right]]){
      temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      left++;
      right--;
    } else if (lib[s[left]]){
      right--;
    } else if (lib[s[right]]){
      left++;
    } else {
      left++;
      right--;
    }
  }

  return s.join('');
};
