/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var result = '1';
  var temp;
  var count;
  var previous;

  while (--n){
    temp = '';
    count = 1;
    previous = result[0];
    for (var i = 1; i < result.length; i++){
      if (result[i] === previous){
        count++;
      } else {
        temp += count;
        temp += previous;
        count = 1;
        previous = result[i];
      }
    }
    temp += count;
    temp += previous;
    result = temp;
  }

  return result;
};