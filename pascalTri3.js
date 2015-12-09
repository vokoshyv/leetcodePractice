/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var work = [1];

  while (rowIndex--){
    var temp = [1];
    work.forEach(function(item){
      temp.push(item + temp[temp.length-1]);
    })
    temp.push(1);
    work = temp;
  }
  console.log(work);
};