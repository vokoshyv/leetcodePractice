/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function(n) {
//   var work = Array(n+1).join('(').concat(Array(n+1).join(')')).split('');
//   var results = [];

//   var parenBuild = function(closeAllowed, buildUp, choices){
//     if (buildUp.length === 2 * n){
//       console.log(buildUp);
//       buildUp = buildUp.slice().join('');
//       results.push(buildUp);
//       return;
//     }

//     for (var i = 0; i < choices.length; i++){
//       var temp = choices.splice(i, 1)[0];
//       if (temp === '('){
//         buildUp.push('(');
//         parenBuild(closeAllowed + 1, buildUp, choices);
//       } else if (temp === ')' && closeAllowed > 0){
//         buildUp.push(')');
//         parenBuild(closeAllowed - 1, buildUp, choices);
//       }
//       buildUp.pop();
//       choices.splice(i, 0, temp);
//     }
//   }
//   parenBuild(0, [], work);
//   return results;
// }

// generateParenthesis(2);

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // var work = Array(n+1).join('(').concat(Array(n+1).join(')')).split('');
  var results = [];

  var parenBuild = function(closeAllowed, buildUp, openChoice, closeChoice){
    if (buildUp.length === 2 * n){
      console.log(buildUp);
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