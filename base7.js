/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  var strNum = num.toString();
  var isNeg = (strNum[0] === '-')? true : false;
  var justNum = (isNeg)? strNum.slice(1) : strNum;

  function build(num){
    if (num < 7){
      return '0123456'[num]
    }

    return build(Math.floor(num / 7)) + '0123456'[num % 7];
  }

  var base7 = build(Number(justNum));

  return (isNeg)? '-' + base7 : base7;
};
