/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var check = {};
  var otherCheck = [];
  var results = [];
  var work;

  nums.forEach(function(value){
    work = [value];
    for (var i = 0; i < otherCheck.length; i++){
      if (check[- otherCheck[i] - value] !== undefined){
        work.push(otherCheck[i]);
        work.push(check[-otherChek[i] - value]);
        results.push(work.slice());
        work.pop().pop();
      } else {
        check[value] = true;
        otherCheck.push(value);
      }
    }
  })
  return results;
};


threeSum([-1, 0, 1, 2, -1, -4]);