/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

var test = [[1,3],[2,6],[8,10],[15,18]];

// //a O(n^2) solution for this merging of intervals
// var checkOverlap = function(first, second){
//   if (Math.min(first[1], second[1]) >= Math.max(first[0], second[0])){
//     return true;
//   }
//   return false;
// }

// var combineIntervals = function(first, second){
//   return [Math.min(first[0], second[0]), Math.max(first[1], second[1])];
// }

// var merge = function(intervals) {
//   var index = 0;
//   while (index < intervals.length){
//     var i = index + 1;
//     while (i < intervals.length){
//       if (checkOverlap(intervals[index], intervals[i])){
//         intervals[index] = combineIntervals(intervals[index], intervals[i]);
//         intervals.splice(i, 1);
//       }
//       i++;
//     }
//     index++;
//   }
//   return intervals;
// };

var merge = function(intervals) {
  if (intervals.length <= 1){
    return intervals;
  }
  var work = intervals.sort(function(a, b){
    return a['start'] - b['start'];
  })
  var results = [];
  var startOfInterval = work[0]['start'];
  var check = 1;

  for (var i = 0; i < work.length - 1; i++){
    if (work[i+1] !== undefined && work[i]['end'] >= work[i+1]['start']){
      results.push([startOfInterval, Math.max(work[i]['end'], work[i+1]['end']));
      startOfInterval = work[i+1]['start'];
    }else {
      results.push([startOfInterval, work[i]['end']]);
      startOfInterval = work[i+1]['start'];
    }
  }
  if (results[results.length-1][1] > work[work.length-1]['start']){
      console.log('haha');
      console.log(results[results.length-1]);
      console.log(work[work.length-1]);
    results[results.length-1] = [Math.min(results[results.length-1][0], work[work.length-1]['start']), Math.max(results[results.length-1][1], work[work.length-1]['end'])]
  }else {
      console.log('blah');
    results.push(work[work.length-1]);
  }
  return results;
}