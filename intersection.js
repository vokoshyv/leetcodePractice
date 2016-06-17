/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var lib = {};
  nums1.forEach(function(element){
    lib[element] = true;
  })

  var result = {};
  nums2.forEach(function(element){
    if (lib[element] !== undefined){
      result[element] = true;
    }
  })

  return Object.keys(result).map(function(element){return parseInt(element)});
};