/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  var work = [];

  var formConcat = function(current, drawFrom){
    if (drawFrom.length === 0){
      work.push(current);
      return;
    }

    for (var i = 0; i < drawFrom.length; i++){
      var temp = drawFrom.splice(i, 1);
      formConcat(current + temp, drawFrom);
      drawFrom.splice(i, 0, temp);
    }
  }

  formConcat('', words);

  results = [];
  for (var i = 0; i < work.length; i++){
    if (s.indexOf(work[i]) > -1){
      results.push(s.indexOf(work[i]));
    }
  }

  return results;
};


findSubstring('barfoothefoobarman', ['foo', 'bar']);