/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
  let result = Infinity;

  function subSwap(arr1, arr2, i, swaps) {
    if (i >= arr1.length) {
      result = Math.min(result, swaps);
      return;
    }

    for (let j = 0; j < arr2.length; j++) {
      [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
      subswap(arr1, arr2);
    }

    subSwap(arr1, arr2, i1 + 1, i2, swaps + 1);
    subSwap(arr1, arr2, i1, i2 + 1, swaps + 1);

    [arr1[i1], arr2[i2]] = [arr2[i2], arr1[i1]];
  }

  subSwap(s1.split(""), s2.split(""), 0, 0, 0);

  return result;
};

console.log(minimumSwap("xx", "yy"));
