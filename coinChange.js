/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let work = new Array(amount + 1).fill(Infinity);
  work[0] = 0;

  let coin;

  for (let i = 0; i < coins.length; i++) {
    coin = coins[i];

    for (let j = coin; j < work.length; j++) {
      work[j] = Math.min(work[j], work[j - coin] + 1);
    }
  }

  return work[amount] === Infinity ? -1 : work[amount];
};
