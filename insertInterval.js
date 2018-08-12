/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  let result = [];
  let addInterval = true;

  intervals.forEach(interval => {
    if (interval[1] >= newInterval[0] && addInterval) {
      result.push(interval);
      result.push(newInterval);
      addInterval = false;
    } else {
      result.push(interval);
    }
  })

  function canCombine(left, right) {
    if (left[1] < right[0]) {
      return false;
    } else if (left[1] >= right[0]) {
      return true;
    }
  }

  function combine(left, right) {
    if (left[1] === right[0]) {
      return [left[0], right[1]];
    } else if (left[1] > right[1]) {
      return [left[0], left[1]];
    } else if (right[1] >= left[1]) {
      return [left[0], right[1]];
    }
  }

  return result;
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
