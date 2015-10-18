/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var count = 0;

  var recurse = function(total){
    if (total >= n){
      count++;
      return;
    }

    recurse(total + 1);
    recurse(total + 2);
  }
  recurse(0);
  return count;
};