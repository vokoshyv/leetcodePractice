/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var work = {};
  var greatest = [];

  nums.forEach(function(value){
    if (work[value] !== undefined){
      work[value]++;
      greatest[work[value]] = value;
    } else {
      work[value] = 1;
      greatest[work[value]] = value;
    }
  })

  return greatest[greatest.length-1];
};