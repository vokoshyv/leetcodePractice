/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var endPointer = nums1.length - 1;

    var i = 0;
    var j = 0;

    while (i < m && j < n){
      if (nums2[j] < nums1[i]){
        var temp = nums2[j];
        nums2[j] = nums1[i];
        nums1[i] = temp;
        j++;
      } else {
        i++;
      }
    }

    console.log('i: ', i);
    console.log('j: ', j);

    while (j < n){
      nums1[i] = nums2[j];
      i++;
      j++;
    }

    return nums1;
};

console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3));



