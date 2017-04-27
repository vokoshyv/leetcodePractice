/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  var top = 'qwertyuiop';
  var middle = 'asdfghjkl';
  var bottom = 'zxcvbnm';

  var lib = {};
  top.split('').forEach(function(letter){
    lib[letter] = 1;
  });
  middle.split('').forEach(function(letter){
    lib[letter] = 2;
  });
  bottom.split('').forEach(function(letter){
    lib[letter] = 3;
  });

  var result = [];

  return words.filter(function(word){
    word = word.toLowerCase();

    for (var i = 1; i < word.length; i++){
      if (lib[word[i]] !== lib[word[i-1]]){
        return false;
      }
    }
    return true;
  });
};