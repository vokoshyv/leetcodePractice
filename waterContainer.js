/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var startPointer = 0;
  var endPointer = height.length-1
  var maxVolume = 0;

  while (startPointer !== endPointer){
    maxVolume = Math.max(maxVolume, (endPointer - startPointer) * Math.min(height[startPointer], height[endPointer]));
    if (height[startPointer] > height[endPointer]){
      endPointer--;
    }else {
      startPointer++;
    }
  }
  return maxVolume;
};