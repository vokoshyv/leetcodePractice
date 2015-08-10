/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  
  var lib = {
    2: 'abc', 
    3: 'def', 
    4: 'ghi', 
    5: 'jkl', 
    6: 'mno', 
    7: 'pqrs', 
    8: 'tuv', 
    9: 'wxyz'
  }
  var results = [];

  var formWords = function(current){
    if (current.length === digits.length){
      results.push(current);
      return;
    }

    for (var i = 0; i < lib[digits[current.length]].length; i++){
      formWords(current + lib[digits[current.length]][i]);
    }
  }

  formWords('');

  return (results.length > 1)? results : [];

};