/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var lib = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  n--;
  while (n > -1){
    result = lib[Math.floor(n % 26)] + result;
    n = Math.floor(n / 26);
    n--;
  }

  return result;
};