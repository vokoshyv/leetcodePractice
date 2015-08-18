/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  str = str.split(' ');

  str = str.filter(function(value){return value.length > 0});
  
  var start = 0;
  var end = str.length-1;
  var temp;

  while (start < end){
    temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }
  return str.join(' ');
};