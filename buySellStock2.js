/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 1){return 0;}
  return prices.reduce(function(prev, curr){if (curr > prev){ return curr - prev}});
};