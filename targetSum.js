/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

https://leetcode.com/problems/target-sum/description/

 */
var findTargetSumWays = function(nums, target) {
    const cache = {};
    const limit = nums.length;

    const path = (current, index) => {
        let key = current + '_' + index;
        if (key in cache) {
            return cache[key];
        }
        if (index === limit) {
            if (current === target) {
                return 1;
            }
            return 0;
        }

        cache[key] = path(current + nums[index], index + 1) + path(current - nums[index], index + 1);

        return cache[key];
    }

    return path(0, 0);
};

console.log(findTargetSumWays([1,1,1,1,1], 3));