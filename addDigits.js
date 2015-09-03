/* 
* @Author: humanityloaner
* @Date:   2015-09-03 16:45:24
* @Last Modified by:   humanityloaner
* @Last Modified time: 2015-09-03 16:48:18
*/

'use strict';

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while (num.toString().length > 1){
    num = num.toString().split('').reduce(function(prev, curr){return Number(prev) + Number(curr)});
  }
  return num;
};