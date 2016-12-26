/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var result = [];
  for (var i = 1; i < n + 1; i++){
    if (i % 5 === 0 && i % 3 === 0){
      result.push('FizzBuzz');
    } else if (i % 5 === 0){
      result.push('Buzz');
    } else if (i % 3 === 0){
      result.push('Fizz');
    } else {
      result.push(i.toString());
    }
  }
  return result;
};