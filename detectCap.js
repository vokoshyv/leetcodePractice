/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word === word.toLowerCase()){
    return true;
  } else if (word === word.toUpperCase()){
    return true;
  } else if (word[0] === word[0].toUpperCase() && word.slice(1).toLowerCase() === word.slice(1)){
    return true;
  } else {
    return false;
  }
};