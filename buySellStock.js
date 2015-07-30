/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var min = prices[0];
  var profit = 0;

  var possibleMin;

  for (var i = 0; i < prices.length; i++){
    min = Math.min(min, prices[i]);
    if (prices[i] - min > profit){
      profit = prices[i] - min;
    }
  }

  return profit; 

};