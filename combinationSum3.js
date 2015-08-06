/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var addThemUp = function(array){
  return array.reduce(function(prev, curr){return prev + curr}, 0);
}

var combinationSum3 = function(k, n) {
  var choices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var results = [];

  var findWorkingTotals = function(current, pullFrom, depth){
    if (depth === k && addThemUp(current) === target){
      results.push(current.sort(function(a, b){return a-b}).slice());
      return;
    }else if (depth > k){
      return;
    }else if (addThemUp(current) > n){
      return;
    }

    for (var i = 0; i < pullFrom.length; i++){
      
    }


  }
};
