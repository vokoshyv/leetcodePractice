/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums = nums.sort((a, b) => {
        return b - a;
    });

    console.log("NUMS: ", nums);
    let visited = new Set();
    let work = [];
    work.push(nums[0]);
    work.push(nums[1]);
    work.push(nums[2]);
    visited.add(0);
    visited.add(1);
    visited.add(2);

    let index = nums.length - 1;
    if (!visited.has(index)) {
        work.push(nums[index]);
    }

    index = nums.length - 2;
    if (!visited.has(index)) {
        work.push(nums[index]);
    }

    index = nums.length - 3;
    if (!visited.has(index)) {
        work.push(nums[index]);
    }

    let result = -Infinity;

    for (let i = 0; i < work.length; i++) {
        for (let j = i + 1; j < work.length; j++) {
            for (let k = j + 1; k < work.length; k++) {
                let product = work[i] * work[j] * work[k];
                result = Math.max(result, product);
            }
        }
    }

    return result;
};