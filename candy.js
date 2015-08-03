/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  var prev = 1;
  var latestLocalMaxIndex = 0;
  var latestLocalMaxValue = 1;
  var results = 1;

  for (var i = 1; i < ratings.length; i++){
    if (ratings[i] < ratings[i-1]){
      // Case 1 : rating is lower than previous value
      if (i - latestLocalMaxIndex >= latestLocalMaxValue){
        results += i - latestLocalMaxIndex + 1;
      }else {
        results += i - latestLocalMaxIndex;
      }
      prev = 1;
    }else if (ratings[i] > ratings[i-1]){
      // Case 2 : rating is higher than previous value
      prev++;
      results += prev;
      latestLocalMaxValue = prev;
      latestLocalMaxIndex = i;
    }else {
      // Case 3 : rating is equal to previous value
      latestLocalMaxIndex = i;
      latestLocalMaxValue = 1;
      prev = 1;
      results += prev;
    }
  }
  return results;
};