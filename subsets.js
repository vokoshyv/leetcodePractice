/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var work = [];

  nums = nums.sort(function(a, b){
    return a-b;
  });

  var findSubs = function(buildUp, depth){
    if (depth === nums.length){
      work.push(buildUp.slice());
      return;
    }

    findSubs(buildUp, depth + 1);
    buildUp.push(nums[depth]);
    findSubs(buildUp, depth + 1);
    buildUp.pop();
  }

  findSubs([], 0);
  return work;
};