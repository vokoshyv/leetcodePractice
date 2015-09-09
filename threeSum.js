/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var results = [];
  if (nums.length < 3){return results};

  var work = nums.sort(function(a, b){return a-b});

  for (var i = 0; i < work.length -1; i++){
    if (i === 0 || work[i] > work[i-1]){
      var toNegate = - work[i];
      var start = i+1;
      var end = work.length - 1;

      while (start < end){
        if (work[start] + work[end] === toNegate){
          results.push([work[i], work[start], work[end]]);
          start++; 
          end--;

          while (start < end && work[end] === work[end+1]){
            end--;
          }
          while (start < end && work[start] === work[start-1]){
            start++;
          }
        } else if (work[start] + work[end] < toNegate){
          start++;
        } else {
          end--;
        }
      }
    }
  }
  return results;
};