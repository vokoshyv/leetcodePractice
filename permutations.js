/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let lib = new Set();
  for (let i = 0; i < nums.length; i++) {
    lib.add(nums);
  }
  let goal = nums.length;

  let result = [];
  function traverse(bank, build) {
    if (build.length === goal) {
      result.push(build.slice());
      return;
    }

    for (let item of bank) {
      bank.delete(item);
      traverse(bank, build.concat(item));
      bank.add(item);
    }

  }
  traverse(lib, []);

  return result;
};


console.log(permute([1,2,3]));
