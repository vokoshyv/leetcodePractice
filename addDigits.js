/* 
* @Author: humanityloaner
* @Date:   2015-09-03 16:45:24
* @Last Modified by:   humanityloaner
* @Last Modified time: 2015-09-03 16:52:49
*/

'use strict';

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return (num - 9) * Math.floor((num-1)/9);
};