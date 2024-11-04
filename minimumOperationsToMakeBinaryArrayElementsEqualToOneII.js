/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let flipped = false;
    let count = 0;

    for (let item of nums) {

        if (flipped && item) {
            flipped = false;
            count++;
        } else if (!flipped && !item) {
            flipped = true;
            count++;
        }



        // if (flipped) {
        //     if (item) {
        //         flipped = false;
        //         count++;
        //     }
        // } else {
        //     // not flipped 
        //     if (item) {
        //         // is a 1
        //         // do nothing
        //     } else {
        //         // is a 0
        //         flipped = true;
        //         count++;
        //     }
        // }
    }

    return count;
};
