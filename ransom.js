/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var lib = {};

  magazine.split('').forEach(function(element){
    if (lib[element] !== undefined){
      lib[element]++;
    } else {
      lib[element] = 1;
    }
  });
  
  for (var i = 0; i < ransomNote.length; i++){
    if (lib[ransomNote[i]] === undefined){
      return false;
    } else if (lib[ransomNote[i]] === 0){
      return false;
    } else {
      lib[ransomNote[i]]--;
    }    
  }
  return true;
};