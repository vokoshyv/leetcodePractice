/* 
* @Author: humanityloaner
* @Date:   2015-09-03 16:58:11
* @Last Modified by:   humanityloaner
* @Last Modified time: 2015-09-03 17:02:14
*/

'use strict';

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums = nums.sort();
  var index = nums.length;
  var result = '';
  while (i--){
  	result += nums[i];
  }
  return result;
};