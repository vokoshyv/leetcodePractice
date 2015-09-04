/* 
* @Author: humanityloaner
* @Date:   2015-09-03 17:08:13
* @Last Modified by:   humanityloaner
* @Last Modified time: 2015-09-03 17:49:18
*/

'use strict';

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(arr) {
  var work = [];
  var checkFor = 1;
  var checkBack = 1;
  var size = arr.length;

  for (var i = 1; i < arr.length; i++){
    if (work[i] === undefined){
      work[i] = 1;
    };
    if (work[size-i-1] === undefined){
      work[size-i-1] = 1;
    }
    work[i] *= (arr[i-1] * checkFor);
    work[size-i-1] *= (arr[size-i] * checkBack);
    checkFor *= arr[i-1];
    checkBack *= arr[size-i];
  }

  return work;
};