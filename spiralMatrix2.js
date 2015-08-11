/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  var work = [];
  var i = n;
  while (i--){
    work.push(Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0));
  }
  console.log(work);
};