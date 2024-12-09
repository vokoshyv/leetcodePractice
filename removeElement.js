/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[i] !== val) {
            i++;
        }
        if (nums[j] === val) {
            j--;
        }
        if (nums[i] === val && nums[j] !== val) {
            nums[i] = nums[j];
            i++;
            j--;
        }
    }

    nums = nums.slice(0, i);
    console.log("NUMS: ", nums);
    // console.log("I: ", i);
    // console.log("J: ", j);
    return i + 1;
};

// console.log(removeElement([3,2,2,3], 3));
// console.log(removeElement([0,1,2,2,3,0,4,2], 2));
// console.log(removeElement([2], 3));
console.log(removeElement([1], 1));