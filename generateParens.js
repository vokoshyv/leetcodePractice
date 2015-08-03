/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var results = [];

  var parenBuild = function(closeAllowed, buildUp, openChoice, closeChoice){
    if (buildUp.length === 2 * n){
      buildUp = buildUp.slice().join('');
      results.push(buildUp);
      return;
    }

    if (openChoice > 0){
      buildUp.push('(');
      parenBuild(closeAllowed + 1, buildUp, openChoice - 1, closeChoice);
      buildUp.pop();
    } 
    if (closeChoice > 0 && closeAllowed > 0){
      buildUp.push(')');
      parenBuild(closeAllowed - 1, buildUp, openChoice, closeChoice - 1);
      buildUp.pop();
    }

  }
  parenBuild(0, [], n, n);
  return results;
}

generateParenthesis(2);