/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Since the problem stated that it's looking for N(log(n))
// time complexity, it's gotta be binary search

var searchRange = function(nums, target) {
  var lowerTarget = target - 0.5;
  var higherTarget = target + 0.5;

  var middle = Math.floor(nums.length/2);
  var start = 0;
  var end = nums.length-1;

  while (start < end-1){
    if (lowerTarget < nums[middle]){
      end = middle;
      middle = Math.floor((start+end)/2);
    }else if (lowerTarget > nums[middle]){
      start = middle;
      middle = Math.floor((start+end)/2);
    }
  }

  var rightBeforeStart = start;
  var rightAfterStart = end;

   middle = Math.floor(nums.length/2);
   start = 0;
   end = nums.length-1;

  while (start < end-1){
    if (higherTarget < nums[middle]){
      end = middle;
      middle = Math.floor((start+end)/2);
    }else if (higherTarget > nums[middle]){
      start = middle;
      middle = Math.floor((start+end)/2);
    }
  }
  var rightBeforeEnd = start;
  var rightAfterEnd = end;
  
  if (nums[rightAfterStart] !== target && nums[rightBeforeEnd] !== target){
    return [-1, -1];
  }else if (rightBeforeStart === rightBeforeEnd && rightAfterStart === rightAfterEnd && nums.length !== 2){
    if (rightBeforeStart === 0){
      return (nums[0] === target)? [0, 0] : [-1, -1];
    }else if (rightAfterEnd === nums.length-1){
      return (nums[nums.length-1] === target)? [nums.length-1, nums.length-1] : [-1, -1];
    }
  }else {
    var begin = rightAfterStart;
    var stop = rightBeforeEnd;
    if (nums[rightBeforeStart] === target){
      begin = rightBeforeStart;
    }
    if (nums[rightAfterEnd] === target){
      stop = rightAfterEnd;
    }
    return [begin, stop]
  }
};







