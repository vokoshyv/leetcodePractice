/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0){
      return 1;
    }else if (n === 1){
      return x;
    }
    if (n > 0){
      var work = 1;
      while (n--){
        work *= x;
      }
      return work;
    } else {
      n = Math.abs(n);
      var work = 1;
      while (n--){
        work *= x;
      }
      return (1 / work);
    }
};