/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  var cache = [0, 1];
  function fill(num){
    var total = 1;
    for (var i = 1; i < n + 1; i++){
      total += cache[i - 1];
      total += cache[n - i];
    }
    cache[n] = total;
  }
  for (var i = 1; i < n + 1; i++){
    fill(i);
  }
  return cache[n];
};

console.log(numTrees(1));
console.log(numTrees(2));
console.log(numTrees(3));
console.log(numTrees(4));
console.log(numTrees(5));