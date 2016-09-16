/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  var lib = {};

  for (var i = 0; i < s.length; i++){
    if (lib[s[i]] === undefined){
      lib[s[i]] = 1;
    } else {
      lib[s[i]]++;
    }
  }

  for (i = 0; i < t.length; i++){
    if (lib[t[i]] === undefined){
      return t[i];
    }
    lib[t[i]]--;
    if (lib[t[i]] === 0){
      delete lib[t[i]];
    }
  }
};



