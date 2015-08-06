/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var addItems = function(array){
  return array.reduce(function(prev, curr){return prev + curr}, 0);
}

var combinationSum = function(candidates, target) {
  var results = [];
  candidates.sort(function(a, b){return a-b})

  var findTotals = function(current, drawFrom){
    if (addItems(current) === target){
      results.push(current.slice());
      return;
    }
    else if (addItems(current) > target){
      return;
    }

    for (var i = 0; i < drawFrom.length; i++){
      current.push(drawFrom[i]);
      findTotals(current, drawFrom.slice(i));
      current.pop();
    }

  }

  findTotals([], candidates);
  return results;
};