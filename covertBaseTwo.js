/**
 * @param {number} N
 * @return {string}
 */
var baseNeg2 = function(N) {
  let lib = "01";

  let result = "";

  while (N > 0) {
    result = lib[N % 2] + result;
    N = Math.floor(N / 2);
  }


  return result;
};
