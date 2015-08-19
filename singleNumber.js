/**
 * @param {number[]} nums
 * @return {number}
 */

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}


var singleNumber = function(nums) {
  var num = 0;
  for (var i = 0; i < nums.length; i++){
    num ^= nums[i];
  }
  return num;
};