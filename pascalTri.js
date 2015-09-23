/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var result = [];

  var work = [1];

  for (var i = 0; i < numRows; i++){
    result.push(work.slice());
    var temp = [1];
    for (var j = 0; j < work.length-1; j++){
      temp.push(work[j] + work[j+1]);
    }
    temp.push(1);
    work = temp;
  }

  return result;

};