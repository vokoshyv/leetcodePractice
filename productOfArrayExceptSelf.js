/* 
* @Author: humanityloaner
* @Date:   2015-09-03 17:08:13
* @Last Modified by:   humanityloaner
* @Last Modified time: 2015-09-03 17:33:23
*/

'use strict';

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(arr) {
  var work = [];
  var check = 1;
  for (var i = 1; i < arr.length; i++){
  	if (work[i] === undefined){
  		work[i] = 1;
  	}
  	work[i] *= (arr[i-1] * check);
  	check *= arr[i-1];
  }
  check = 1;

  for (var i = arr.length-2; i > -1; i--){
  	if (i === 0){
  		work[i] = 1;
  	}
  	work[i] *= (arr[i+1] * check);
  	check *= arr[i+1];
  }
  return work;
};