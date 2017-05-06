/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  var rank = [];
  nums.forEach(function(num, index){
    rank[num] = index;
  });

  var i = rank.length;
  var ranking = 1;
  while (i--){
    if (rank[i] !== undefined){
      if (ranking < 4){
        if (ranking === 1){
          nums[rank[i]] = 'Gold Medal';
        } 
        if (ranking === 2){
          nums[rank[i]] = 'Silver Medal';
        } 
        if (ranking === 3){
          nums[rank[i]] = 'Bronze Medal';
        } 
      } else {
        nums[rank[i]] = ranking.toString();
      }

      ranking++;
    }
  }

  return nums;
};