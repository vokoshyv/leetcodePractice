/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 0){
    return false;
  }
  if (n % 3 === 0){
    n /= 3;
  } else {
    return false;
  }

  if (n % 3 === 0){
    n /= 3;
  } else {
    return false;
  }

  if (n % 3 === 0){
    n /= 3;
  } else {
    return false;
  }

  return true;
};