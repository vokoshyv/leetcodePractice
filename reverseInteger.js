/**
 * @param {number} x
 * @return {number}
 */

var reverseNumber = function(input){
  input = input.toString();
  var work = '';
  input.split('').map(function(value){
    work = value + work;
  })
  return Number(work);
}

var reverse = function(x) {
    var work = (x > 0)? reverseNumber(x) : - reverseNumber(Math.abs(x));
    return (work > -2147483648 && work < 2147483647)? work : 0;
};