/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var nums1Index = 0;
  var nums2Index = 0;
  var work = [];

  while (nums1.length > 0 || nums2.length > 0){
    if (nums1[0] < nums2[0]){
        work.push(nums1.shift());
    }else if (nums2[0] < nums1[0]){
        work.push(nums2.shift());
    }
    else if (nums1[0] === undefined){
        work.push(nums2.shift());
    }
    else if (nums2[0] === undefined){
        work.push(nums1.shift());
    }
    else {
        work.push(nums1.shift());
    }
  }
  var middleIndex = Math.floor(work.length / 2);
  if (work.length % 2 !== 0){
    return work[middleIndex];
  }else {
    return (work[middleIndex] + work[middleIndex - 1]) / 2;
  }

};

findMedianSortedArrays([1, 3, 5, 67], [1, 2, 3, 6, 7]);