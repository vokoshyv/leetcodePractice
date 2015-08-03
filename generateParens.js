/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var work = Array(n+1).join('(').concat(Array(n+1).join(')')).split('');
  var results = [];
  console.log(work);

  var parenBuild = function(closeAllowed, buildUp, choices){
    if (choices.length === 0){
      buildUp = buildUp.join('');
      results.push(buildUp);
      return;
    }

    for (var i = 0; i < choices.length; i++){
      var temp = choices.splice(i, 1)[0];
      if (temp === '('){
        buildUp.push('(');
        parenBuild(closeAllowed++, buildUp, choices);
      } else if (temp === ')' && closeAllowed > 0){
        buildUp.push(')');
        parenBuild(closeAllowed--, buildUp, choices);
      }
      buildUp.pop();
      choices.splice(i, 0, temp);
    }
  }
  parenBuild(0, [], work);
  return results;
}

generateParenthesis(2);