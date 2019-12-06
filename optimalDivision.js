/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  let str = "0";
  function create(build, index, open) {
    if (index >= nums.length) {
      let strEval = eval(str);
      if (open === 0) {
        let current = eval(build);
        if (str === "0") {
          str = build;
        } else if (current > strEval) {
          str = build;
        } else if (current === strEval && build.length < str.length) {
          str = build;
        }
      } else if (open === 1) {
        build += ')';
        let current = eval(build);
        if (current > strEval) {
          str = build;
        } else if (current === strEval && build.length < str.length) {
          str = build;
        }
      }
      return;
    }

    if (open > 0) {
      create(build + ')/' + nums[index], index + 1, open - 1);
      create(build + '/' + nums[index], index + 1, open);
    }

    create(build + '/' + nums[index], index + 1, open);
    create(build + '/(' + nums[index], index + 1, open + 1);
  }
  create(nums[0].toString(), 1, 0);

  return str;
};



console.log(optimalDivision([2]));
