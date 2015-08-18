/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  var results = [];

  var findCombos = function(current, pullFrom){
    if (pullFrom.length === 0){
      results.push(current.join(' '));
      return;
    }

    for (var i = 0; i < wordDict.length; i++){
      if (pullFrom.indexOf(wordDict[i]) === 0){
        current.push(wordDict[i]);
        findCombos(current, pullFrom.slice(wordDict[i].length));
        current.pop();
      }
    }
  }
  findCombos([], s);
  return results;
};

wordBreak('catsanddog', ["cat", "cats", "and", "sand", "dog"]);