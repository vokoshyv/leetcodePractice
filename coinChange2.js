/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let work = new Array(amount + 1).fill(0);
  work[0] = 1;
  let workLength = work.length;

  for (let coin of coins) {
    let i = coin;

    while (i < workLength) {
      work[i] = work[i-coin] + work[i];
      i++;
    }
  }

  return work[work.length - 1];
};


console.log(change(10, [10]));


// change(10, [1,2,3]);

//  0 1 2 3 4
// [1,0,0,0,0]
// [1,1,1,1,1]
// [1,1,2,2,3]
// [1,1,2,3,4]
//
// 1,1,1,1
// 1,1,2
// 1,3
// 2,2
