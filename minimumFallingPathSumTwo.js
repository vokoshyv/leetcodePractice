/**
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function(arr) {

  const sortedArrs = [];

  for (let item of arr) {
    sortedArrs.push(item.sort((a, b) => {return a - b;}));
  }

  console.log("SORTED ARRS: ", sortedArrs);

  const minExceptSelf = [];

  for (let i = 0; i < arr.length; i++) {
    let row = [];
    for (let j = 0; j < arr[i].length; j++) {
      let k = 0;
      while (k < sortedArrs[i].length) {
        if (arr[i][j] !== sortedArrs[i][k]) {
          row.push(sortedArrs[i][k]);
          break;
        }
        k++;
      }
      if (row.length === j) {
        row.push(sortedArrs[i][0]);
      }
    }
    minExceptSelf.push(row);
  }

  console.log("MIN EXCEPT SELF", minExceptSelf);

  const result = [];


  for (let i = 1; i < arr.length; i++) {
    let row = [];
    for (let j = 0; j < arr[i].length; j++) {
      row.push(arr[i][j] + minExceptSelf[i-1][j]);
    }
    minExceptSelf[i] = row;
    result.push(row);
  }

  console.log("INPUT: ", arr);
  console.log("RESULT: ", result);

  return Math.min(...result[result.length - 1]);
};


console.log(minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]]));
