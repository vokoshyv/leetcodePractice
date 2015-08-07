/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var addThemUp = function(array){
  return array.reduce(function(prev, curr){return prev + curr}, 0);
}

var combinationSum3 = function(k, n) {
  var choices = [9, 8, 7, 6, 5, 4, 3, 2, 1]
  var results = [];
  var already = {};

  var findWorkingTotals = function(current, pullFrom, depth){
    if (depth === k && addThemUp(current) === n){
      if (already[current.slice().sort().join('')] === undefined){
        results.push(current.slice().sort());
      }
      already[current.slice().sort().join('')] = true;
      return;
    }else if (depth > k){
      return;
    }else if (addThemUp(current) > n){
      return;
    }

    for (var i = 0; i < pullFrom.length; i++){
      var temp = pullFrom.splice(i, 1);
      current.push(temp[0]);
      findWorkingTotals(current, pullFrom, depth + 1);
      current.pop();
      pullFrom.splice(i, 0, temp[0]);
    }


  }

  findWorkingTotals([], choices, 0);
  return results;
};