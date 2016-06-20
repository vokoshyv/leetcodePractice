/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var lib = {};

  nums1.forEach(function(element){
    if (lib[element] === undefined){
      lib[element] = 1;
    } else {
      lib[element]++;
    }
  })

  var result = [];

  nums2.forEach(function(element){
    if (lib[element]){
      result.push(element);
      lib[element]--;
      if (lib[element] === 0){
        delete lib[element];
      }
    }
  })

  return result;
};