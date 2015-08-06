/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var addThemUp = function(array){
  return array.reduce(function(prev, current){return prev + current}, 0);
}

var combinationSum2 = function(candidates, target) {
  var results = [];
  candidates.sort(function(a, b){return b - a});

  var findTotals = function(current, pullFrom){
    if (addThemUp(current) === target){
      current.sort(function(a, b){return a-b});
      results.push(current.slice());
      return;
    }else if (addThemUp(current) > target){
      return;
    }

    for (var i = 0; i < pullFrom.length; i++){
      var temp = pullFrom.splice(i, 1)[0];
      current.push(temp);
      findTotals(current, pullFrom);
      current.pop();
      pullFrom.splice(i, 0, temp);
    }
  }

  findTotals([], candidates);
  return results;
};