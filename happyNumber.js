/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var temp;
  var lib = {};
  var count = 1;

  while (n !== 1){
    // if (lib[n] !== undefined){
    //   return false;
    // }

    if (count > 10000){
      console.log(false);
      return false;
    }
    n = (n).toString().split('').reduce(function(prev, curr){
      return Number(prev) * Number(prev) + Number(curr) * Number(curr);
    })
    count++;
  }

  console.log(true);
  return true;
};

isHappy(13);