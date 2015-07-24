/**
 * @param {string} s
 * @return {number}
 */

var hasNoRepeats = function(input){
  var work = {};
  for (var i = 0; i < input.length; i++){
    if (work[input[i]]){
      return false;
    }else {
      work[input[i]] = true;
    }
  }
  return true;
}

var lengthOfLongestSubstring = function(s) {
  var work = [];
  for (var i = 0; i < s.length; i++){
    for (var j = i+1; j < s.length+1; j++){
      work.push(s.slice(i, j));
    }
  }

  var result = 0;

  work = work.map(function(value){
    if (hasNoRepeats(value)){
      result = Math.max(value.length, result);
    }
  });
  return result;
};