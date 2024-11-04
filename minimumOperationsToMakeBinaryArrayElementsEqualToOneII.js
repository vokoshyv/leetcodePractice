/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let flipped = false;
    let count = 0;

    for (let item of nums) {
        if (!(flipped ^ item)) {
            flipped = !flipped;
            count++;
        }
    }

    return count;
};
