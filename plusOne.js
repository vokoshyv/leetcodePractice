/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var index = digits.length - 1;
  var toCarry = 0;
  var temp = digits[index] + toCarry + 1;
  if (temp > 9){
    toCarry = 1;
    digits[index] = Number(temp.toString()[1]);
  }else {
    toCarry = 0;
    digits[index] = temp;
    return digits;
  }

  while (index--){
    temp = digits[index] + toCarry;
    if (temp > 9){
      toCarry = 1;
      digits[index] = Number(temp.toString()[1]);
    }else {
      toCarry = 0;
      digits[index] = temp;
    }
  }
  
  if (toCarry === 1){
      digits.unshift(1);
  }
  return digits;
};