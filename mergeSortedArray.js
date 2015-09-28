/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var work = [];
  var mPointer = 0;
  var nPointer = 0;
  while (mPointer < m || nPointer < n){

    if (mPointer === m){
      work = work.concat(nums2.slice(nPointer));
      break;
    } else if (nPointer === n){
      work = work.concat(nums1.slice(mPointer));
      break;
    } else if (nums1[mPointer] < nums2[nPointer]){
      work.push(nums1[mPointer]);
      mPointer++;
      continue;
    } else {
      work.push(nums2[nPointer]);
      nPointer++;
      continue;
    }
  }

  nums1 = work;
};




merge([0], 0, [1], 1);