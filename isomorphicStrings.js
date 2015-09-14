/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length){
    return false;
  }
  
  var lib = {};

  for (var i = 0; i < s.length; i++){
    if (lib[s[i]] !== undefined){
      if (lib[s[i]] !== t[i]){
        return false;
      }
    } else {
      lib[s[i]] = t[i];
    }
  }

  var lib2 = {};

  for (var i = 0; i < t.length; i++){
    if (lib2[t[i]] !== undefined){
      if (lib2[t[i]] !== s[i]){
        return false;
      }
    } else {
      lib2[t[i]] = s[i];
    }
  }

  return true;
};