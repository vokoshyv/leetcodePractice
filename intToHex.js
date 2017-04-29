/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  var lib = '0123456789abcdef';
  var result = '';
  if (num < 0){
    num = 4294967296 + num;
  }
  
  while (num > 15){
    result = lib[num%16] + result;
    num = Math.floor(num / 16);
  }
  result = lib[num] + result;
  return result;
};

console.log(toHex(235));

