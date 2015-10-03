/**
 * @param {string} s
 * @return {number}
 */

var giveValueOfLetter = function(input){
  return input.charCodeAt(0) - 64;
}

var titleToNumber = function(s) {
  var i = s.length; 
  var work = 0;
  var multiplier = 1;

  while (i--){
    work += multiplier * giveValueOfLetter(s[i]);
    multiplier *= 26;
  }

  return work;
};