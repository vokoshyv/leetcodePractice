/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var nums1Index = 0;
  var nums2Index = 0;
  var work = [];

  while (nums1[nums1Index] !== undefined || nums2[nums2Index] !== undefined){
    if (nums1[nums1Index] < nums2[nums2Index]){
        work.push(nums1[nums1Index]);
        nums1Index++;
    }else if (nums2[nums2Index] < nums1[nums1Index]){
        work.push(nums2[nums2Index]);
        nums2Index++;
    }
    else if (nums1[nums1Index] === undefined){
        work.push(nums2[nums2Index]);
        nums2Index++;
    }
    else if (nums2[nums2Index] === undefined){
        work.push(nums1[nums1Index]);
        nums1Index++;
    }
    else {
        work.push(nums1[nums1Index]);
        nums1Index++;
    }
  }
  var middleIndex = Math.floor(work.length / 2);
  if (work.length % 2 !== 0){
    return work[middleIndex];
  }else {
    return (work[middleIndex] + work[middleIndex - 1]) / 2;
  }

};

findMedianSortedArrays([1, 3, 4, 30, 67], [1, 2, 3, 6, 7]);