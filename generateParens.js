/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var work = Array(n+1).join('(').concat(Array(n+1).join(')'));
  console.log(work);
};