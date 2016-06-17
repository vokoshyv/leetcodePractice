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
  var work = Array(arr.length);

  work[arr.length-1] = 1;

  for (var i = arr.length-2; i > -1; i--){
    work[i] = work[i+1] * arr[i+1];
  }

  var left = 1;

  for (var i = 0; i < arr.length; i++){
    work[i] = work[i] * left;
    left = left * arr[i];
  }

  return work;
};
