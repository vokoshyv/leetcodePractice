/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = 0;

    let shiftI = nums1.length - 1;

    while (shiftI >= n) {
        nums1[shiftI] = nums1[i];
        i--;
        shiftI--;
    }

    i = n;
    let k = 0;
    
    while (m !== 0 && i < nums1.length && j < n) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums1[i];
            i++;
        } else {
            nums1[k] = nums2[j];
            j++;
        }
        k++;
    }

    while (i < nums1.length) {
        nums1[k] = nums1[i];
        i++;
        k++;
    }

    while (j < nums2.length) {
        nums1[k] = nums2[j];
        j++;
        k++;
    }
};

// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));

// console.log(merge([2,3,6,0,0,0], 3, [1,3,7], 3));


/*


 i
[1,2,3,0,0,0]

 j
[2,5,6]


 i
[2,3,6,0,0,0]

 j
[1,3,7]


*/