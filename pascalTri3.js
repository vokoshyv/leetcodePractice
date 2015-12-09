/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var work = [1];
  var temp;

  while (rowIndex--){
    temp = [1];

    for (var i = 0; i < work.length-1; i++){
      temp.push(work[i] + work[i+1]);
    }

    temp.push(1);
    work = temp;
  }
  return work;
}; 