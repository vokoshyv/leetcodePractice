/*
"1 + 1" = 2
" 6-4 / 2 " = 4
"2*(5+5*2)/3+(6/2+8)" = 21
"(2+6* 3+5- (3*14/7+2)*5)+3"=-12
*/


function removeSpaces(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result += str[i];
    }
  }

  return result;
}


function basicCalc(str) {
  str = removeSpaces(str);

  console.log(str);
}


basicCalc("1 + 1");
basicCalc(" 6-4 / 2 ");
basicCalc("2*(5+5*2)/3+(6/2+8)");
basicCalc("(2+6* 3+5- (3*14/7+2)*5)+3");
