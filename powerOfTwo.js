/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n < 1){return false};

  var check = 1;
  while (check <= n){
    if (check === n){
      return true;
    }
    check *= 2;
  }
  return false;
};